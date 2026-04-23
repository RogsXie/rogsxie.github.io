// ===== Personal Photo Gallery Functionality =====

// Photo Modal Functions
function openPhotoModal() {
    console.log('Opening photo modal...');

    const modal = document.getElementById('photoModal');
    const modalPhoto = document.getElementById('modalPhoto');

    if (!modal || !modalPhoto) {
        console.error('Photo modal elements not found');
        return;
    }

    // Show modal
    modal.classList.add('show');

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Focus on modal for accessibility
    setTimeout(() => {
        modal.focus();
    }, 100);

    // Add keyboard event listeners
    addModalKeyboardListeners();

    console.log('Photo modal opened');
}

function closePhotoModal() {
    console.log('Closing photo modal...');

    const modal = document.getElementById('photoModal');

    if (!modal) {
        console.error('Photo modal element not found');
        return;
    }

    // Hide modal
    modal.classList.remove('show');

    // Restore body scroll
    document.body.style.overflow = '';

    // Remove keyboard event listeners
    removeModalKeyboardListeners();

    console.log('Photo modal closed');
}

// Keyboard Event Listeners
function addModalKeyboardListeners() {
    document.addEventListener('keydown', handleModalKeydown);
}

function removeModalKeyboardListeners() {
    document.removeEventListener('keydown', handleModalKeydown);
}

function handleModalKeydown(e) {
    const modal = document.getElementById('photoModal');

    if (!modal || !modal.classList.contains('show')) {
        return;
    }

    switch (e.key) {
        case 'Escape':
            e.preventDefault();
            closePhotoModal();
            break;
        case 'ArrowLeft':
            e.preventDefault();
            navigateModalImage('prev');
            break;
        case 'ArrowRight':
            e.preventDefault();
            navigateModalImage('next');
            break;
        case 'Enter':
            e.preventDefault();
            closePhotoModal();
            break;
    }
}

// Image Navigation (for future expansion)
function navigateModalImage(direction) {
    const modalPhoto = document.getElementById('modalPhoto');
    const currentSrc = modalPhoto.src;

    // For now, we only have one image, but this could be expanded for multiple photos
    console.log(`Navigating ${direction} (not implemented for single image)`);

    // Future implementation could cycle through multiple photos
}

// Photo Loading State Management
function handlePhotoLoad(img) {
    img.classList.add('loaded');
    img.classList.remove('loading');
    img.setAttribute('aria-label', 'Personal photo loaded');
}

function handlePhotoError(img) {
    img.classList.add('error');
    img.classList.remove('loading');
    img.setAttribute('aria-label', 'Personal photo failed to load');

    // Show error message
    console.error('Failed to load profile photo');

    // Could show a fallback image or message here
}

// Photo Image Observer for Performance
function setupImageObserver() {
    const profilePhoto = document.querySelector('.profile-photo');

    if (profilePhoto && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;

                    // Add loading state
                    img.classList.add('loading');

                    // Preload the large photo
                    preloadLargePhoto();

                    // Stop observing once loaded
                    observer.unobserve(img);
                }
            });
        });

        imageObserver.observe(profilePhoto);
    }
}

// Preload Large Photo for Modal
function preloadLargePhoto() {
    const largePhoto = new Image();
    largePhoto.src = 'images/profile-photo-large.svg';

    largePhoto.onload = () => {
        console.log('Large photo preloaded successfully');
    };

    largePhoto.onerror = () => {
        console.warn('Failed to preload large photo');
    };
}

// Touch Device Support
function setupTouchSupport() {
    const profilePhoto = document.querySelector('.profile-photo');

    if (profilePhoto) {
        // Add touch feedback
        profilePhoto.addEventListener('touchstart', function(e) {
            this.classList.add('touched');
        }, { passive: true });

        profilePhoto.addEventListener('touchend', function(e) {
            this.classList.remove('touched');
        }, { passive: true });
    }
}

// Accessibility Enhancements
function setupAccessibility() {
    const profilePhoto = document.querySelector('.profile-photo');

    if (profilePhoto) {
        // Ensure proper ARIA attributes
        profilePhoto.setAttribute('role', 'button');
        profilePhoto.setAttribute('aria-label', 'View personal photo in full screen');
        profilePhoto.setAttribute('tabindex', '0');

        // Add keyboard support for the photo
        profilePhoto.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openPhotoModal();
            }
        });
    }
}

// Error Handling and Fallbacks
function setupErrorHandling() {
    const profilePhoto = document.querySelector('.profile-photo');

    if (profilePhoto) {
        profilePhoto.addEventListener('error', function() {
            handlePhotoError(this);
        });

        profilePhoto.addEventListener('load', function() {
            handlePhotoLoad(this);
        });
    }
}

// Analytics Integration (Optional)
function trackPhotoInteraction(action) {
    // Example: Google Analytics event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'photo_interaction', {
            'action': action,
            'page_location': window.location.href
        });
    }

    // Custom analytics tracking
    console.log(`Photo interaction tracked: ${action}`);
}

// Initialize Photo Gallery
function initPhotoGallery() {
    console.log('Initializing personal photo gallery...');

    // Setup all components
    setupImageObserver();
    setupTouchSupport();
    setupAccessibility();
    setupErrorHandling();

    // Preload large photo
    preloadLargePhoto();

    // Track interactions
    const profilePhoto = document.querySelector('.profile-photo');
    if (profilePhoto) {
        profilePhoto.addEventListener('click', function() {
            trackPhotoInteraction('open_modal');
        });
    }

    // Modal click outside to close
    const modal = document.getElementById('photoModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closePhotoModal();
            }
        });
    }

    console.log('Personal photo gallery initialized successfully');
}

// Make functions globally available
window.openPhotoModal = openPhotoModal;
window.closePhotoModal = closePhotoModal;
window.initPhotoGallery = initPhotoGallery;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure all elements are loaded
    setTimeout(initPhotoGallery, 500);
});

// Re-initialize on dynamic content changes
if (typeof MutationObserver !== 'undefined') {
    const observer = new MutationObserver(function(mutations) {
        // Check if photo elements were added/removed
        const hasPhoto = document.querySelector('.profile-photo');
        const hasModal = document.getElementById('photoModal');

        if (hasPhoto && hasModal) {
            // Re-initialize if photo elements changed
            initPhotoGallery();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Debug Function for Development
function debugPhotoGallery() {
    console.group('📸 Photo Gallery Debug Info');
    console.log('Profile Photo Element:', document.querySelector('.profile-photo'));
    console.log('Modal Element:', document.getElementById('photoModal'));
    console.log('Modal Photo Element:', document.getElementById('modalPhoto'));
    console.log('Modal Visible:', document.getElementById('photoModal')?.classList.contains('show'));
    console.groupEnd();
}

// Make debug function available globally
window.debugPhotoGallery = debugPhotoGallery;

// Performance monitoring
function logPerformanceMetrics() {
    if ('performance' in window) {
        const loadTime = performance.now();
        console.log('Photo Gallery Performance:', {
            loadTime: loadTime.toFixed(2) + 'ms',
            memoryUsage: performance.memory ? (performance.memory.usedJSHeapSize / 1048576).toFixed(2) + 'MB' : 'N/A'
        });
    }
}

// Log performance on page load
window.addEventListener('load', logPerformanceMetrics);