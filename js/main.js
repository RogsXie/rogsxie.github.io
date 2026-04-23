// ===== Main JavaScript Functions (Clean Version) =====

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Main.js loaded successfully (Clean Version)');

    // Initialize all functions
    initDarkMode();
    initSmoothScroll();
    initBackToTop();
    initNavbar();
    initGallery();
    initSocialLinks();
    initIconCompatibility();

    // 添加全局点击监听器用于调试
    document.body.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"], .btn[href^="#"]') || e.target.closest('a[href^="#"], .btn[href^="#"]')) {
            const link = e.target.matches('a[href^="#"], .btn[href^="#"]') ? e.target : e.target.closest('a[href^="#"], .btn[href^="#"]');
            console.log('🎯 Global click detected on:', link.getAttribute('href'), '| Theme:', document.documentElement.getAttribute('data-theme'));
        }
    }, true);
});

// ===== Dark Mode Functionality =====
function initDarkMode() {
    console.log('Initializing dark mode...');

    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    console.log('Saved theme:', savedTheme);

    // Set default theme to dark mode for all users
    if (savedTheme) {
        // If user has explicitly chosen a theme before, respect their choice
        htmlElement.setAttribute('data-theme', savedTheme);
        updateDarkModeIcon(savedTheme);
        console.log('Applied saved theme:', savedTheme);
    } else {
        // New users get dark mode by default (regardless of system preference)
        htmlElement.setAttribute('data-theme', 'dark');
        updateDarkModeIcon('dark');
        console.log('Applied default theme: dark mode');
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateDarkModeIcon(newTheme);

            console.log('Theme changed from', currentTheme, 'to', newTheme);

            // Trigger a custom event for theme change
            const event = new CustomEvent('themeChanged', {
                detail: { theme: newTheme }
            });
            document.dispatchEvent(event);
        });
    } else {
        console.error('Dark mode toggle button not found!');
    }
}

// Update dark mode icon
function updateDarkModeIcon(theme) {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
        console.log('Icon updated for theme:', theme);
    }
}

// ===== Enhanced Smooth Scroll Functionality =====
function initSmoothScroll() {
    console.log('Initializing enhanced smooth scroll...');

    // Global variables for tracking
    let lastClickTime = 0;
    const clickDelay = 100; // 减少延迟以提高响应性
    let scrollInProgress = false;
    let isBinding = false; // 防止重复绑定

    // Enhanced link finder
    function findAllNavigationLinks() {
        const selectors = [
            'a[href^="#"]',
            '.btn[href^="#"]',
            'button[onclick*="scroll"]',
            '[data-scroll-to]'
        ];

        let allLinks = [];
        selectors.forEach(selector => {
            const links = document.querySelectorAll(selector);
            allLinks = allLinks.concat(Array.from(links));
        });

        // 更严格地排除外部链接（以 http:// 或 https:// 开头的链接）和导师链接
        const filteredLinks = allLinks.filter(link => {
            const href = link.getAttribute('href') || link.getAttribute('data-scroll-to') || '';
            const isExternal = href.startsWith('http://') || href.startsWith('https://') || href.startsWith('//');
            const isTeacherLink = href.includes('jszy.hhu.edu.cn');
            const hasTargetBlank = link.getAttribute('target') === '_blank';

            // 排除外部链接、教师链接和所有target="_blank"的链接
            return !isExternal && !isTeacherLink && !hasTargetBlank;
        });

        const uniqueLinks = [...new Set(filteredLinks)];
        console.log(`Found ${uniqueLinks.length} navigation links using enhanced detection (excluding external, teacher links, and target blank links)`);
        return uniqueLinks;
    }

    // Bind events to all navigation links
    function bindNavigationEvents() {
        if (isBinding) {
            console.log('⚠️ Already binding, skipping...');
            return 0;
        }

        isBinding = true;
        const navLinks = findAllNavigationLinks();

        console.log('🔧 Binding events to', navLinks.length, 'links');

        navLinks.forEach((link, index) => {
            const href = link.getAttribute('href') || link.getAttribute('data-scroll-to') || '';
            const text = (link.textContent || link.innerText || '').trim();
            const className = link.className || '(no class)';
            console.log(`📌 Link ${index + 1}:`, href, '|', text || '(no text)', '|', className);

            // Remove existing event listeners by cloning
            const newLink = link.cloneNode(true);
            link.parentNode.replaceChild(newLink, link);

            // Add enhanced click handler with proper event handling
            newLink.addEventListener('click', handleSmoothScroll, false);
        });

        console.log('✅ Successfully bound', navLinks.length, 'navigation links');
        isBinding = false;
        return navLinks.length;
    }

    // Enhanced smooth scroll handler
    function handleSmoothScroll(e) {
        const link = this;
        const targetId = link.getAttribute('href') ||
                        link.getAttribute('data-scroll-to') || '';

        console.log('🔗 Link clicked:', targetId, 'Text:', link.textContent.trim());
        console.log('   Event:', e.type, 'Target:', e.target);
        console.log('   Current theme:', document.documentElement.getAttribute('data-theme'));

        // 更严格地检查并排除外部链接和特殊链接
        if (targetId.startsWith('http://') || targetId.startsWith('https://') || targetId.startsWith('//')) {
            console.log('🌐 External link detected, allowing default behavior');
            return true; // 允许外部链接正常工作
        }

        // 检查是否是导师链接
        if (targetId.includes('jszy.hhu.edu.cn')) {
            console.log('👨‍🏫 Teacher link detected, allowing default behavior');
            return true; // 允许导师链接正常工作
        }

        // 检查是否有target="_blank"属性
        if (link.getAttribute('target') === '_blank') {
            console.log('🪟 Target blank link detected, allowing default behavior');
            return true; // 允许新标签页链接正常工作
        }

        // 检查是否是rel="noopener noreferrer"的链接
        if (link.getAttribute('rel') && link.getAttribute('rel').includes('noopener')) {
            console.log('🔗 External link (noopener) detected, allowing default behavior');
            return true; // 允许外部安全链接正常工作
        }

        // 只处理内部锚点链接
        if (!targetId || targetId === '#' || targetId.trim() === '' || !targetId.startsWith('#')) {
            console.log('⚠️ Not an internal anchor link, allowing default behavior');
            return true; // 允许默认行为
        }

        console.log('✅ Processing internal link:', targetId);

        // Prevent default immediately
        e.preventDefault();
        e.stopPropagation();

        // Debounce - 减少延迟
        const currentTime = Date.now();
        if (currentTime - lastClickTime < clickDelay) {
            console.log('Click throttled, please wait...');
            return false;
        }
        lastClickTime = currentTime;

        // Don't block if scroll is in progress, just queue it
        const cleanTargetId = targetId.startsWith('#') ? targetId : '#' + targetId;
        const targetElement = findTargetElement(cleanTargetId);

        if (targetElement) {
            // Reset scroll in progress flag
            scrollInProgress = false;
            scrollToElement(targetElement, cleanTargetId);
        } else {
            console.error('Target element not found for:', cleanTargetId);
            showScrollError(cleanTargetId);
        }

        return false;
    }

    // Find target element with multiple strategies
    function findTargetElement(targetId) {
        // Strategy 1: Direct ID match
        let targetElement = document.querySelector(targetId);

        // Strategy 2: Partial ID match
        if (!targetElement) {
            const idWithoutHash = targetId.replace('#', '');
            const candidates = document.querySelectorAll(`[id*="${idWithoutHash}"]`);
            if (candidates.length > 0) {
                targetElement = candidates[0];
                console.log('Found element using partial ID match:', targetElement);
            }
        }

        // Strategy 3: Name attribute match
        if (!targetElement) {
            const nameMatch = document.querySelector(`[name="${targetId.replace('#', '')}"]`);
            if (nameMatch) {
                targetElement = nameMatch;
                console.log('Found element using name attribute:', targetElement);
            }
        }

        // Strategy 4: Text content match
        if (!targetElement) {
            const targetText = targetId.replace('#', '').toLowerCase();
            const textCandidates = document.querySelectorAll('section, div');
            for (const candidate of textCandidates) {
                const text = (candidate.textContent || candidate.innerText || '').toLowerCase();
                if (text.includes(targetText)) {
                    targetElement = candidate;
                    console.log('Found element using text match:', targetElement);
                    break;
                }
            }
        }

        return targetElement;
    }

    // Enhanced scroll to element
    function scrollToElement(targetElement, targetId) {
        scrollInProgress = true;

        try {
            const navbar = document.querySelector('.navbar, .navigation, header');
            let navbarHeight = 70; // Default fallback

            if (navbar) {
                navbarHeight = navbar.offsetHeight || 70;
            }

            const targetPosition = targetElement.offsetTop - navbarHeight - 20;

            console.log('Scrolling to:', {
                target: targetId,
                position: targetPosition,
                navbarHeight: navbarHeight
            });

            // 确保目标元素存在且有效
            if (!targetElement || targetElement.nodeType !== Node.ELEMENT_NODE) {
                throw new Error('Invalid target element');
            }

            // Use native smooth scroll if available
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // 减少超时时间，提高响应性
                setTimeout(() => {
                    updateActiveNavLink(targetId);
                    scrollInProgress = false;
                    console.log('Smooth scroll completed to:', targetId);
                }, 800);
            } else {
                // Fallback animation
                animateScroll(window.pageYOffset, targetPosition, 800, () => {
                    updateActiveNavLink(targetId);
                    scrollInProgress = false;
                    console.log('Animated scroll completed to:', targetId);
                });
            }

        } catch (error) {
            console.error('Error during scroll:', error);
            targetElement.scrollIntoView({ behavior: 'auto', block: 'start' });
            scrollInProgress = false;
        }
    }

    // Animation fallback
    function animateScroll(startPosition, targetPosition, duration, callback) {
        const startTime = performance.now();
        const distance = targetPosition - startPosition;

        function animation(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);

            const currentPosition = startPosition + (distance * easeProgress);
            window.scrollTo(0, currentPosition);

            if (progress < 1) {
                requestAnimationFrame(animation);
            } else if (callback) {
                callback();
            }
        }

        requestAnimationFrame(animation);
    }

    // Show scroll error
    function showScrollError(targetId) {
        const errorDiv = document.createElement('div');
        errorDiv.textContent = `Cannot find section: ${targetId}`;
        errorDiv.style.cssText = `
            position: fixed; top: 80px; right: 20px; background: #dc3545;
            color: white; padding: 10px 15px; border-radius: 5px;
            font-size: 14px; z-index: 10000; max-width: 250px;
        `;

        document.body.appendChild(errorDiv);

        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 3000);
    }

    // Update active navigation link
    function updateActiveNavLink(targetId) {
        try {
            const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href === targetId) {
                    link.classList.add('active');
                }
            });
        } catch (error) {
            console.error('Error updating active nav link:', error);
        }
    }

    // Initial binding
    const boundLinks = bindNavigationEvents();
    console.log(`Successfully bound events to ${boundLinks} navigation links`);

    // Re-bind after dynamic content loads with debouncing
    let mutationTimeout;
    const observer = new MutationObserver(() => {
        clearTimeout(mutationTimeout);
        mutationTimeout = setTimeout(() => {
            console.log('🔄 DOM changed, re-binding navigation events...');
            bindNavigationEvents();
        }, 500);
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    return {
        rebind: bindNavigationEvents,
        scrollInProgress: () => scrollInProgress
    };
}

// ===== Update Active Navigation Link =====
function updateActiveNavLink(targetId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === targetId) {
            link.classList.add('active');
        }
    });
}

// ===== Update Active Nav Link On Scroll =====
function updateActiveNavLinkOnScroll() {
    const sections = document.querySelectorAll('section[id]');
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70;
    const scrollPosition = window.pageYOffset + navbarHeight + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            updateActiveNavLink(`#${sectionId}`);
        }
    });
}

// ===== Scroll Event Listener =====
let scrollTimeout;
window.addEventListener('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        updateActiveNavLinkOnScroll();
    }, 100);
});

// ===== Back to Top Button =====
function initBackToTop() {
    const backToTopButton = document.getElementById('backToTop');

    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ===== Navbar Functionality =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // 手机端菜单自动收起功能
    initMobileMenuAutoClose();
}

// 手机端菜单自动收起
function initMobileMenuAutoClose() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    if (!navbarToggler || !navbarCollapse || !navbar) {
        console.log('Mobile menu elements not found');
        return;
    }
    
    console.log('Initializing mobile menu auto-close functionality');
    
    // 检查菜单是否展开
    function isMenuOpen() {
        return navbarCollapse.classList.contains('show');
    }
    
    // 关闭菜单
    function closeMenu() {
        if (isMenuOpen()) {
            console.log('Closing mobile menu');
            // 使用Bootstrap的collapse API
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, { toggle: false });
            bsCollapse.hide();
        }
    }
    
    // 点击页面其他地方时关闭菜单
    document.addEventListener('click', function(e) {
        // 检查菜单是否展开
        if (!isMenuOpen()) {
            return;
        }
        
        // 检查点击是否在导航栏之外
        const clickedInsideNavbar = navbar.contains(e.target);
        
        if (!clickedInsideNavbar) {
            console.log('Clicked outside navbar, closing menu');
            closeMenu();
        }
    });
    
    // 点击菜单项时关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Nav link clicked, closing menu');
            // 延迟关闭，让点击动画完成
            setTimeout(() => {
                closeMenu();
            }, 150);
        });
    });
    
    // 点击语言切换和主题切换按钮后也关闭菜单
    const utilityButtons = document.querySelectorAll('#languageToggle, #darkModeToggle');
    utilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Utility button clicked, closing menu');
            setTimeout(() => {
                closeMenu();
            }, 150);
        });
    });
    
    console.log('Mobile menu auto-close initialized successfully');
}

// ===== Gallery Functionality =====
function initGallery() {
    console.log('Initializing research gallery...');

    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) {
        console.error('Gallery grid element not found');
        return;
    }

      const galleryImages = [
        'one.jpg',
    ];

    // Generate gallery HTML
    let galleryHTML = '';

    if (galleryImages.length === 0) {
        // Show placeholder when no images are available
        galleryHTML = `
            <div class="gallery-empty">
                <i class="fas fa-images fa-4x text-muted mb-3"></i>
                <h4 class="text-muted">Research Gallery Coming Soon</h4>
                <p class="text-muted">Research photos and images will be displayed here</p>
            </div>
        `;
    } else {
        // Create gallery items for each image
        galleryImages.forEach((imageName, index) => {
            const imagePath = `images/gallery/${imageName}`;
            const imageTitle = generateImageTitle(imageName);

            galleryHTML += `
                <div class="gallery-item" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="gallery-image-container">
                        <img src="${imagePath}"
                             alt="${imageTitle}"
                             class="gallery-image"
                             loading="lazy"
                             onerror="this.parentElement.innerHTML='<div class=\\'gallery-error\\'><i class=\\'fas fa-exclamation-triangle fa-3x text-muted\\'></i><p class=\\'text-muted\\'>Image not available</p></div>'">
                        <div class="gallery-overlay">
                            <div class="gallery-overlay-content">
                                <i class="fas fa-search-plus fa-2x mb-2"></i>
                                <p class="mb-0">${imageTitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // Set the gallery HTML
    galleryGrid.innerHTML = galleryHTML;

    // Add click event listeners to gallery items
    setTimeout(() => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('.gallery-image');
                if (img && img.src && !img.classList.contains('error')) {
                    openGalleryModal(img.src, img.alt);
                }
            });
        });
    }, 100);

    console.log(`Gallery initialized with ${galleryImages.length} images`);
}

// Generate title from filename
function generateImageTitle(filename) {
    // Remove file extension and capitalize first letter
    const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
    const title = nameWithoutExt
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase());

    return title || 'Research Image';
}

// Open gallery modal
function openGalleryModal(imageSrc, imageTitle) {
    console.log('Opening gallery modal for:', imageTitle);

    const modal = document.createElement('div');
    modal.className = 'gallery-modal-overlay';
    modal.innerHTML = `
        <div class="gallery-modal-content">
            <button class="gallery-modal-close" onclick="closeGalleryModal()">
                <i class="fas fa-times"></i>
            </button>
            <div class="gallery-modal-body">
                <img src="${imageSrc}" alt="${imageTitle}" class="gallery-modal-image">
                <div class="gallery-modal-caption">
                    <h5>${imageTitle}</h5>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add fade-in animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Close on background click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeGalleryModal();
        }
    });

    // Close on ESC key
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeGalleryModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);
}

// Close gallery modal
function closeGalleryModal() {
    const modal = document.querySelector('.gallery-modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Make functions globally available
window.openGalleryModal = openGalleryModal;
window.closeGalleryModal = closeGalleryModal;

// ===== Social Links Functionality =====
function initSocialLinks() {
    console.log('Initializing social links...');

    const socialLinks = document.querySelectorAll('.social-link, .social-link-large');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const platform = this.getAttribute('title') || this.querySelector('span')?.textContent || 'unknown';
            console.log('Social link clicked:', platform);
            trackSocialLinkClick(platform);
        });
    });
}

// Track social link clicks
function trackSocialLinkClick(platform) {
    console.log(`Social media link clicked: ${platform}`);
}

// Show WeChat QR Code
function showWeChatQR() {
    console.log('Showing WeChat QR code with enhanced design...');
    
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        contact: {
            scanToConnect: 'Scan to Connect',
            weChatID: 'WeChat ID',
            copyID: 'Copy ID',
            done: 'Done',
            scanDescription: 'Scan the QR code with WeChat to add me as a contact',
            qrCodeUnavailable: 'QR Code Unavailable'
        }
    };

    // 创建弹窗遮罩层
    const modal = document.createElement('div');
    modal.className = 'wechat-modal-overlay';

    // 创建弹窗内容容器
    const modalContent = document.createElement('div');
    modalContent.className = 'wechat-modal-content';

    // 构建现代化的弹窗内容
    modalContent.innerHTML = `
        <div class="wechat-modal-header">
            <div class="wechat-modal-icon">
                <i class="fab fa-weixin"></i>
            </div>
            <h3 class="wechat-modal-title">${t.contact.scanToConnect}</h3>
            <button class="wechat-modal-close" onclick="closeWeChatModal()">
                <i class="fas fa-times"></i>
            </button>
        </div>

        <div class="wechat-modal-body">
            <div class="qr-code-wrapper">
                <div class="qr-code-container">
                    <img src="images/wechat-qr.jpg"
                         alt="WeChat QR Code"
                         class="qr-code-image"
                         onload="this.classList.add('loaded')"
                         onerror="this.classList.add('error'); this.nextElementSibling.classList.add('show');">
                    <div class="qr-code-fallback">
                        <i class="fab fa-weixin"></i>
                        <p>QR Code</p>
                        <small>${t.contact.qrCodeUnavailable}</small>
                    </div>
                    <div class="qr-code-loading">
                        <div class="loading-spinner"></div>
                    </div>
                </div>
            </div>

            <div class="wechat-info">
                <div class="wechat-id-section">
                    <h4 class="wechat-id-label">
                        <i class="fab fa-weixin"></i>
                        ${t.contact.weChatID}
                    </h4>
                    <div class="wechat-id-container">
                        <code class="wechat-id">Rogsxie</code>
                        <button class="copy-btn" onclick="copyWeChatID()" title="${t.contact.copyID}">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </div>

                <p class="wechat-description">
                    ${t.contact.scanDescription}
                </p>
            </div>
        </div>

        <div class="wechat-modal-footer">
            <button class="wechat-btn wechat-btn-primary" onclick="copyWeChatID()">
                <i class="fas fa-copy me-2"></i>
                ${t.contact.copyID}
            </button>
            <button class="wechat-btn wechat-btn-secondary" onclick="closeWeChatModal()">
                <i class="fas fa-check me-2"></i>
                ${t.contact.done}
            </button>
        </div>
    `;

    // 添加到DOM
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    // 触发动画
    setTimeout(() => {
        modal.classList.add('show');
        modalContent.classList.add('show');
    }, 10);

    // 绑定事件
    bindWeChatModalEvents(modal);

    // 自动关闭加载状态
    setTimeout(() => {
        const loadingSpinner = modal.querySelector('.qr-code-loading');
        const qrImage = modal.querySelector('.qr-code-image');
        if (loadingSpinner && (qrImage.classList.contains('loaded') || qrImage.classList.contains('error'))) {
            loadingSpinner.style.display = 'none';
        }
    }, 2000);
}

// 关闭微信弹窗
function closeWeChatModal() {
    const modal = document.querySelector('.wechat-modal-overlay');
    if (modal) {
        modal.classList.remove('show');
        const modalContent = modal.querySelector('.wechat-modal-content');
        modalContent.classList.remove('show');

        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// 绑定微信弹窗事件
function bindWeChatModalEvents(modal) {
    // 点击遮罩关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeWeChatModal();
        }
    });

    // ESC键关闭
    const handleEscape = (e) => {
        if (e.key === 'Escape') {
            closeWeChatModal();
            document.removeEventListener('keydown', handleEscape);
        }
    };
    document.addEventListener('keydown', handleEscape);

    // 阻止内容区域点击事件冒泡
    const modalContent = modal.querySelector('.wechat-modal-content');
    modalContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}

// Copy WeChat ID to clipboard
function copyWeChatID() {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        contact: {
            idCopied: 'WeChat ID copied to clipboard!',
            copyFailed: 'Failed to copy WeChat ID'
        }
    };
    
    const wechatID = 'Rogsxie'; // 您的微信ID

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(wechatID).then(() => {
            showNotification(t.contact.idCopied, 'success');
        }).catch(err => {
            console.error('Failed to copy WeChat ID: ', err);
            fallbackCopyTextToClipboard(wechatID);
        });
    } else {
        fallbackCopyTextToClipboard(wechatID);
    }
}

// Fallback for older browsers
function fallbackCopyTextToClipboard(text) {
    // Get current translations
    const t = typeof getCurrentTranslation === 'function' ? getCurrentTranslation() : {
        contact: {
            idCopied: 'WeChat ID copied to clipboard!',
            copyFailed: 'Failed to copy WeChat ID'
        }
    };
    
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showNotification(t.contact.idCopied, 'success');
        } else {
            showNotification(t.contact.copyFailed, 'error');
        }
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        showNotification(t.contact.copyFailed, 'error');
    }

    document.body.removeChild(textArea);
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 10000;
        padding: 15px 20px; border-radius: 8px; color: white;
        font-weight: 500; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        max-width: 300px; word-wrap: break-word;
    `;

    if (type === 'success') {
        notification.style.background = '#28a745';
    } else if (type === 'error') {
        notification.style.background = '#dc3545';
    } else {
        notification.style.background = '#17a2b8';
    }

    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
        }
    }, 3000);
}

// Make functions available globally
window.showWeChatQR = showWeChatQR;
window.copyWeChatID = copyWeChatID;

// ===== Icon Compatibility Check =====
function initIconCompatibility() {
    console.log('Initializing icon compatibility check...');
    checkFontAwesomeLoading();
    validateSocialIcons();
    addIconFallbacks();
}

function checkFontAwesomeLoading() {
    const testElement = document.createElement('i');
    testElement.className = 'fas fa-test';
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const isFontAwesomeLoaded = computedStyle.fontFamily.includes('Font Awesome') ||
                                  computedStyle.fontFamily.includes('FontAwesome');

    document.body.removeChild(testElement);

    if (!isFontAwesomeLoaded) {
        console.warn('Font Awesome not properly loaded');
        addFontAwesomeFallback();
    } else {
        console.log('Font Awesome loaded successfully');
    }
}

function validateSocialIcons() {
    const iconMappings = {
        'fa-github': {
            testClass: 'fab fa-github',
            fallback: 'GitHub',
            alternatives: ['fab fa-git-alt', 'fas fa-code-branch']
        },
        'fa-graduation-cap': {
            testClass: 'fas fa-graduation-cap',
            fallback: 'Scholar',
            alternatives: ['fas fa-user-graduate', 'fas fa-university']
        },
        // 'fa-researchgate': {
        //     testClass: 'fab fa-researchgate',
        //     fallback: 'RG',
        //     alternatives: ['fas fa-flask', 'fas fa-microscope']
        // },
        'fa-weixin': {
            testClass: 'fab fa-weixin',
            fallback: 'WeChat',
            alternatives: ['fas fa-comment', 'fas fa-comments']
        }
    };

    Object.keys(iconMappings).forEach(iconKey => {
        const iconConfig = iconMappings[iconKey];
        const elements = document.querySelectorAll(`.${iconKey}`);

        if (elements.length > 0) {
            const isValid = validateIcon(iconConfig.testClass);
            if (!isValid) {
                console.warn(`Icon ${iconKey} not found, adding fallback`);
                replaceIconsWithFallback(elements, iconConfig);
            } else {
                console.log(`Icon ${iconKey} is valid`);
            }
        }
    });
}

function validateIcon(iconClass) {
    const testElement = document.createElement('i');
    testElement.className = iconClass;
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const isVisible = computedStyle.fontFamily.includes('Font Awesome') ||
                     computedStyle.fontFamily.includes('FontAwesome');

    document.body.removeChild(testElement);
    return isVisible;
}

function replaceIconsWithFallback(elements, config) {
    elements.forEach(element => {
        const parent = element.parentElement;
        const title = parent.getAttribute('title') || config.fallback;

        for (const alternative of config.alternatives) {
            if (validateIcon(alternative)) {
                element.className = alternative;
                console.log(`Replaced with alternative: ${alternative}`);
                return;
            }
        }

        element.style.display = 'none';

        const textSpan = document.createElement('span');
        textSpan.textContent = config.fallback;
        textSpan.className = 'icon-fallback';
        textSpan.setAttribute('title', title);

        parent.insertBefore(textSpan, element);
        console.log(`Replaced with text fallback: ${config.fallback}`);
    });
}

function addFontAwesomeFallback() {
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'stylesheet';
    fallbackLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    fallbackLink.crossOrigin = 'anonymous';

    document.head.appendChild(fallbackLink);

    console.log('Added Font Awesome fallback CDN');

    setTimeout(() => {
        checkFontAwesomeLoading();
        validateSocialIcons();
    }, 2000);
}

function addIconFallbacks() {
    const allIcons = document.querySelectorAll('.fab, .fas, .far');
    let missingIcons = 0;

    allIcons.forEach(icon => {
        const computedStyle = window.getComputedStyle(icon);
        const isIconVisible = computedStyle.fontFamily.includes('Font Awesome') ||
                             computedStyle.fontFamily.includes('FontAwesome');

        if (!isIconVisible) {
            missingIcons++;
            const parent = icon.parentElement;
            const title = parent.getAttribute('title') || 'Icon';

            icon.style.display = 'none';

            const textSpan = document.createElement('span');
            textSpan.textContent = title.charAt(0).toUpperCase();
            textSpan.className = 'icon-fallback';
            textSpan.setAttribute('title', title);

            parent.insertBefore(textSpan, icon);
        }
    });

    if (missingIcons > 0) {
        console.log(`Added fallbacks for ${missingIcons} missing icons`);
    }
}

// Export for global access
window.initIconCompatibility = initIconCompatibility;

// ===== Debug Functions =====
function debugDarkMode() {
    console.group('Dark Mode Debug Info');
    console.log('Current theme:', document.documentElement.getAttribute('data-theme'));
    console.log('Saved theme:', localStorage.getItem('theme'));
    console.log('Dark mode toggle button:', document.getElementById('darkModeToggle'));
    console.log('CSS variables applied:', getComputedStyle(document.documentElement).getPropertyValue('--bg-dark'));
    console.groupEnd();
}

// Make debug function available globally for testing
window.debugDarkMode = debugDarkMode;

// Initialize debug on page load (remove in production)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    setTimeout(debugDarkMode, 2000);
}
