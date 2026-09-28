document.addEventListener('DOMContentLoaded', () => {
    const baseUrl = 'https://countapi.mileshilliard.com/api/v1';
    const preview = window.location.hostname !== 'rogsxie.github.io';
    const scope = preview ? 'rogsxie_github_io_homepage_preview' : 'rogsxie_github_io_homepage';
    const likedKey = `${scope}_liked_v2`;
    const likeButton = document.getElementById('profileLike');
    const likeCount = document.getElementById('likeCount');
    const viewCount = document.getElementById('viewCount');
    const heartIcon = likeButton.querySelector('.fa-heart');

    async function counter(operation, kind) {
        const response = await fetch(`${baseUrl}/${operation}/${scope}_${kind}`, {
            cache: 'no-store',
            credentials: 'omit'
        });
        if (operation === 'get' && response.status === 404) return 0;
        if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
        const data = await response.json();
        const value = Number(data.value);
        if (!Number.isSafeInteger(value) || value < 0) throw new Error('Invalid counter response');
        return value;
    }

    function showCount(element, value) {
        element.textContent = new Intl.NumberFormat(document.documentElement.lang || 'en').format(value);
    }

    function setLiked() {
        likeButton.setAttribute('aria-pressed', 'true');
        likeButton.disabled = true;
        heartIcon.classList.replace('far', 'fas');
        likeButton.querySelector('.profile-like-label').textContent = getCurrentTranslation().engagement.liked;
    }

    let liked = false;
    try {
        liked = localStorage.getItem(likedKey) === 'true';
    } catch (_) {
        // The counters still work when browser storage is unavailable.
    }
    if (liked) setLiked();

    counter('get', 'likes').then(value => {
        showCount(likeCount, value);
        if (!liked) likeButton.disabled = false;
    }).catch(error => {
        console.warn('Could not load like count:', error);
        likeCount.textContent = '--';
    });

    counter('hit', 'views').then(value => showCount(viewCount, value)).catch(error => {
        console.warn('Could not update view count:', error);
        viewCount.textContent = '--';
    });

    likeButton.addEventListener('click', async () => {
        if (likeButton.disabled) return;
        likeButton.disabled = true;
        likeButton.setAttribute('aria-busy', 'true');
        try {
            const value = await counter('hit', 'likes');
            showCount(likeCount, value);
            liked = true;
            try { localStorage.setItem(likedKey, 'true'); } catch (_) {}
            setLiked();
        } catch (error) {
            console.warn('Could not save like:', error);
            likeButton.disabled = false;
        } finally {
            likeButton.removeAttribute('aria-busy');
        }
    });
});
