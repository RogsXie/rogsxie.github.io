// Public counters are shared across visitors. Local previews only read them.
document.addEventListener('DOMContentLoaded', () => {
    const namespace = 'rogsxie.github.io';
    const key = 'homepage';
    const liveSite = window.location.hostname === namespace;
    const likeButton = document.getElementById('profileLike');
    const likeCount = document.getElementById('likeCount');
    const viewCount = document.getElementById('viewCount');
    const likedKey = 'rogsxie-homepage-liked';
    let previewLiked = false;
    let likedThisVisit = false;

    async function counter(action, readOnly) {
        const url = `https://counterapi.com/api/${namespace}/${action}/${key}${readOnly ? '?readOnly=true' : ''}`;
        const response = await fetch(url, { cache: 'no-store' });
        if (!response.ok) throw new Error(`Counter request failed: ${response.status}`);
        const data = await response.json();
        if (!Number.isSafeInteger(data.value) || data.value < 0) throw new Error('Invalid counter response');
        return data.value;
    }

    function showCount(element, value) {
        element.textContent = new Intl.NumberFormat(document.documentElement.lang || 'en').format(value);
        element.dataset.value = String(value);
    }

    function setLiked() {
        likeButton.setAttribute('aria-pressed', 'true');
        likeButton.disabled = true;
        const t = getCurrentTranslation();
        likeButton.querySelector('.profile-like-label').textContent = t.engagement.liked;
    }

    try {
        if (liveSite && localStorage.getItem(likedKey) === 'true') setLiked();
    } catch (_) {
        // The counter still works when browser storage is unavailable.
    }

    counter('like', true).then(value => {
        if (!likedThisVisit) showCount(likeCount, value);
    }).catch(error => {
        console.warn('Could not load like count:', error);
        if (!likedThisVisit) likeCount.textContent = '--';
    });

    counter('view', !liveSite).then(value => showCount(viewCount, value)).catch(error => {
        console.warn('Could not load view count:', error);
        viewCount.textContent = '--';
    });

    likeButton.addEventListener('click', async () => {
        if (likeButton.disabled || previewLiked) return;
        likeButton.disabled = true;
        try {
            const value = liveSite ? await counter('like', false) : Number(likeCount.dataset.value || 0) + 1;
            likedThisVisit = true;
            showCount(likeCount, value);
            if (!liveSite) previewLiked = true;
            if (liveSite) {
                try { localStorage.setItem(likedKey, 'true'); } catch (_) {}
            }
            setLiked();
        } catch (error) {
            console.warn('Could not save like:', error);
            likeButton.disabled = false;
        }
    });
});
