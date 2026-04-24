// ===== Language Translation System =====

// Translation data object
const translations = {
    en: {
        // Navigation
        nav: {
            home: "Home",
            publications: "Publications",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            welcome: "Welcome to Zhenyang Xie's Academic Homepage",
            title: "Graduate Student | School of Information Engineering",
            university: "Jiangxi University of Water Resources and Electric Power",
            intro1: "I am a master's degree student. at the",
            intro2: ", supervised by",
            // intro3: "and",
            intro4: "My research focuses on developing advanced artificial intelligence methods for remote sensing image interpretation, integrating deep learning techniques with remote sensing data analysis to develop intelligent systems for automated image interpretation.",
            collegeOf: "School of Information Engineering"
        },
        // Buttons
        buttons: {
            publications: "Publications",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        // About Section
        about: {
            title: "About Me",
            researchFocus: "Research Focus",
            researchFocusText: "My work focuses on improving the accuracy and efficiency of remote sensing applications through advanced machine learning algorithms and computer vision techniques.",
            researchInterests: "Research Interests",
            interests: {
                ai: "Artificial Intelligence & Deep Learning",
                rs: "Remote Sensing Image Processing",
                cv: "Computer Vision & Pattern Recognition",
                gis: "Geographic Information Systems"
            },
            technicalExpertise: "Technical Expertise",
            technicalText: "Deep Learning, CNNs, Transformer architectures, Selective State Space Model, Classification, Change Detection, Multi-scale Feature Fusion",
            education: "Education",
            edu1: "M.S. in Big Data Technology and Engineering, Jiangxi University of Water Resources and Electric Power (2024.09 - 2027.06)",
            edu1Awards: "National Scholarship · Provincial Academic Scholarship",
            edu2: "B.E. in Software Engineering, Jiangxi Normal University (2020.09 - 2024.06)",
            edu2Awards: "Second-class Scholarship · Merit Student · Outstanding Student Leader · Outstanding Graduate",
        },
        // Publications Section
        publications: {
            title: "Publications",
            authors: "Authors",
            journal: "Journal",
            conference: "Conference",
            journalArticle: "Journal Article",
            conferenceArticle: "Conference Paper",
            pdf: "PDF",
            doi: "DOI",
            code: "Code",
            citations: "citations",
            viewCitations: "View citations on Google Scholar",
            citationCount: "Citation count",
            noModelDiagram: "No model diagram available",
            clickToEnlarge: "Click to enlarge",
            download: "Download",
            esiHighlyCited: "🏆 ESI Highly Cited Paper"
        },
        // Services Section
        services: {
            title: "Academic Services",
            // subtitle: "I serve as a reviewer for several prestigious journals in the fields of image processing, remote sensing, and artificial intelligence.",
            journalReviewer: "Journal Reviewer"
        },
        // Gallery Section
        gallery: {
            title: "Research Gallery",
            comingSoon: "Research Gallery Coming Soon",
            comingSoonDesc: "Research photos and images will be displayed here",
            imageNotAvailable: "Image not available"
        },
        // Contact Section
        contact: {
            title: "Contact",
            email: "Email",
            findMeOn: "Find Me On",
            googleScholar: "Google Scholar",
            // researchGate: "ResearchGate",
            weChat: "WeChat",
            scanToConnect: "Scan to Connect",
            weChatID: "WeChat ID",
            copyID: "Copy ID",
            done: "Done",
            scanDescription: "Scan the QR code with WeChat to add me as a contact",
            qrCodeUnavailable: "QR Code Unavailable",
            idCopied: "WeChat ID copied to clipboard!",
            copyFailed: "Failed to copy WeChat ID"
        },
        // Footer
        footer: {
            welcome: "Welcome to Zhenyang Xie's Homepage"
        },
        // Back to Top
        backToTop: "Back to Top"
    },
    zh: {
        // Navigation
        nav: {
            home: "首页",
            publications: "学术成果",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        // Hero Section
        hero: {
            welcome: "欢迎来到谢镇阳的学术主页",
            title: "硕士研究生 | 信息工程学院",
            university: "江西水利电力大学",
            intro1: "我是",
            intro2: "的硕士研究生，导师为",
            // intro3: "教授和",
            // intro4: "教授。我的研究专注于开发先进的人工智能方法用于遥感图像解译，将深度学习技术与遥感数据分析相结合，设计智能化的遥感图像解译算法。",
            // intro3: "教授和",
            intro4: "教授。我的研究专注于开发先进的人工智能方法用于遥感图像解译，将深度学习技术与遥感数据分析相结合，设计智能化的遥感图像解译算法。",
            collegeOf: "信息工程学院"
        },
        // Buttons
        buttons: {
            publications: "学术成果",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        // About Section
        about: {
            title: "关于我",
            researchFocus: "研究方向",
            researchFocusText: "我的工作专注于通过先进的机器学习算法和计算机视觉技术提高遥感应用的准确性和效率。",
            researchInterests: "研究兴趣",
            interests: {
                ai: "人工智能与深度学习",
                rs: "遥感图像处理",
                cv: "计算机视觉与模式识别",
                gis: "地理信息系统"
            },
            technicalExpertise: "技术特长",
            technicalText: "深度学习、卷积神经网络、Transformer架构、选择性状态空间模型、分类、变化检测、多尺度特征融合",
            education: "教育背景",
            edu1: "江西水利电力大学 · 信息工程学院 · 大数据技术与工程 · 硕士 (2024.09 - 2027.06)",
            edu1Awards: "国家奖学金 · 省学业奖学金",
            edu2: "江西师范大学 · 软件学院 · 软件工程 · 学士 (2020.09 - 2024.06)",
            edu2Awards: "二等奖学金 · 三好学生 · 优秀学生干部 · 优秀毕业生",
        },
        // Publications Section
        publications: {
            title: "学术成果",
            authors: "作者",
            journal: "期刊",
            conference: "会议",
            journalArticle: "期刊论文",
            conferenceArticle: "会议论文",
            pdf: "PDF",
            doi: "DOI",
            code: "代码",
            citations: "引用",
            viewCitations: "在谷歌学术上查看引用",
            citationCount: "引用次数",
            noModelDiagram: "暂无模型图",
            clickToEnlarge: "点击放大",
            download: "下载",
            esiHighlyCited: "🏆 ESI高被引论文"
        },
        // Services Section
        services: {
            title: "学术服务",
            // subtitle: "我担任图像处理、遥感和人工智能领域多个知名期刊的审稿人。",
            journalReviewer: "期刊审稿人"
        },
        // Gallery Section
        gallery: {
            title: "科研活动图片",
            comingSoon: "科研图片展示即将推出",
            comingSoonDesc: "科研照片和图像将在此处展示",
            imageNotAvailable: "图像不可用"
        },
        // Contact Section
        contact: {
            title: "联系方式",
            email: "邮箱",
            findMeOn: "在这里找到我",
            googleScholar: "谷歌学术",
            // researchGate: "ResearchGate",
            weChat: "微信",
            scanToConnect: "扫码添加",
            weChatID: "微信号",
            copyID: "复制微信号",
            done: "完成",
            scanDescription: "使用微信扫描二维码添加我为好友",
            qrCodeUnavailable: "二维码不可用",
            idCopied: "微信号已复制到剪贴板！",
            copyFailed: "复制微信号失败"
        },
        // Footer
        footer: {
            welcome: "欢迎访问谢镇阳的主页"
        },
        // Back to Top
        backToTop: "返回顶部"
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'en';

// Initialize language system
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});

function initLanguageSystem() {
    // Initializing language system
    
    // Apply saved language
    applyLanguage(currentLanguage);
    
    // Bind language toggle button
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        updateLanguageButton();
    }
}

// Toggle between languages
function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage);
    applyLanguage(currentLanguage);
    updateLanguageButton();
    
    // Trigger custom event for other components
    const event = new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
    });
    document.dispatchEvent(event);
    
    // Language switched to: ${currentLanguage}
}

// Update language button icon/text
function updateLanguageButton() {
    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        const icon = langToggle.querySelector('i');
        const text = langToggle.querySelector('.lang-text');
        
        if (currentLanguage === 'zh') {
            if (icon) icon.className = 'fas fa-language';
            if (text) text.textContent = 'EN';
        } else {
            if (icon) icon.className = 'fas fa-language';
            if (text) text.textContent = '中文';
        }
    }
}

// Apply language to all elements
function applyLanguage(lang) {
    const t = translations[lang];
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);
    
    // Navigation
    updateNavigation(t);
    
    // Hero Section
    updateHeroSection(t);
    
    // About Section
    updateAboutSection(t);
    
    // Publications Section
    updatePublicationsSection(t);
    
    // Services Section
    updateServicesSection(t);
    
    // Gallery Section
    updateGallerySection(t);
    
    // Contact Section
    updateContactSection(t);
    
    // Footer
    updateFooter(t);
    
    // Language applied: ${lang}
}

// Update Navigation
function updateNavigation(t) {
    const navLinks = {
        'home': t.nav.home,
        'publications': t.nav.publications,
        'services': t.nav.services,
        'gallery': t.nav.gallery,
        'contact': t.nav.contact
    };
    
    Object.keys(navLinks).forEach(key => {
        const link = document.querySelector(`.nav-link[href="#${key}"]`);
        if (link) {
            link.textContent = navLinks[key];
        }
    });
}

// Update Hero Section
function updateHeroSection(t) {
    // Main title
    const mainTitle = document.querySelector('.hero-content h1');
    if (mainTitle) {
        mainTitle.textContent = t.hero.welcome;
    }
    
    // Subtitle
    const subtitle = document.querySelector('.hero-content h2');
    if (subtitle) {
        subtitle.textContent = t.hero.title;
    }
    
    // University
    const university = document.querySelector('.hero-content h3');
    if (university) {
        university.textContent = t.hero.university;
    }
    
    // Introduction paragraph - preserving links
    const introPara = document.querySelector('.hero-content p');
    if (introPara) {
        const collegeLink = introPara.querySelector('a[href*="https://computer.juwp.edu.cn/index.htm"]');
        const hhuLink = introPara.querySelector('a[href*="https://www.juwp.edu.cn/"]');
        const prof1Link = introPara.querySelector('a[href*="https://computer.juwp.edu.cn/info/1059/1911.htm"]');
        // const prof2Link = introPara.querySelector('a[href*="lcm"]');
        
        // if (collegeLink && hhuLink && prof1Link && prof2Link)
        if (collegeLink && hhuLink && prof1Link ){
            // Clone links to preserve attributes
            const collegeClone = collegeLink.cloneNode(true);
            const hhuClone = hhuLink.cloneNode(true);
            const prof1Clone = prof1Link.cloneNode(true);
            // const prof2Clone = prof2Link.cloneNode(true);
            
            // Update link text
            collegeClone.textContent = t.hero.collegeOf;
            hhuClone.textContent = currentLanguage === 'zh' ? '江西水利电力大学' : 'Jiangxi University of Water Resources and Electric Power';
            // Keep professor names as is (no translation)
            
            // Rebuild the paragraph based on language
            if (currentLanguage === 'zh') {
                introPara.innerHTML = `
                    我是${hhuClone.outerHTML}${collegeClone.outerHTML}的硕士研究生，导师为
                    ${prof1Clone.outerHTML}教授。
                    我的研究专注于将深度学习技术与遥感数据分析相结合，设计智能化的图像处理算法，将人工智能方法用于遥感图像解译工作。
                `;
            } else {
                introPara.innerHTML = `
                    I am a graduate student at the ${collegeClone.outerHTML}, ${hhuClone.outerHTML}, supervised by 
                    ${prof1Clone.outerHTML}. 
                    My research focuses on developing advanced artificial intelligence methods for remote sensing image interpretation, 
                    integrating deep learning techniques with remote sensing data analysis to develop intelligent systems for automated image interpretation.
                `;
            }
        }
    }
    
    // Navigation buttons
    const heroButtons = document.querySelectorAll('.hero-content a.btn');
    heroButtons.forEach(btn => {
        const href = btn.getAttribute('href');
        const icon = btn.querySelector('i');
        
        if (href === '#publications') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.publications}`;
        } else if (href === '#services') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.services}`;
        } else if (href === '#gallery') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.gallery}`;
        } else if (href === '#contact') {
            btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.contact}`;
        }
    });
}

// Update About Section
function updateAboutSection(t) {
    // About Me title
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) {
        aboutTitle.textContent = t.about.title;
    }
    
    // Get all about cards
    const aboutCards = document.querySelectorAll('.about-card');
    
    if (aboutCards.length >= 4) {
        // First card: Research Focus
        const firstCard = aboutCards[0];
        const firstTitle = firstCard.querySelector('h4');
        const firstText = firstCard.querySelector('p');
        
        if (firstTitle) {
            const icon = firstTitle.querySelector('i');
            firstTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.about.researchFocus}`;
        }
        
        if (firstText) {
            firstText.textContent = t.about.researchFocusText;
        }
        
        // Second card: Research Interests
        const secondCard = aboutCards[1];
        const secondTitle = secondCard.querySelector('h4');
        const interestsList = secondCard.querySelectorAll('ul li');
        
        if (secondTitle) {
            const icon = secondTitle.querySelector('i');
            secondTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.about.researchInterests}`;
        }
        
        if (interestsList.length > 0) {
            const interestsArray = [
                t.about.interests.ai,
                t.about.interests.rs,
                t.about.interests.cv,
                t.about.interests.gis
            ];
            
            interestsList.forEach((item, index) => {
                if (index < interestsArray.length) {
                    item.textContent = interestsArray[index];
                }
            });
        }
        
        // Third card: Technical Expertise
        const thirdCard = aboutCards[2];
        const thirdTitle = thirdCard.querySelector('h4');
        const thirdText = thirdCard.querySelector('p');
        
        if (thirdTitle) {
            const icon = thirdTitle.querySelector('i');
            thirdTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.about.technicalExpertise}`;
        }
        
        if (thirdText) {
            thirdText.textContent = t.about.technicalText;
        }
        const fourthCard = aboutCards[3];
        const fourthTitle = fourthCard.querySelector('h4');
        // const eduParas = fourthCard.querySelectorAll('p');
        const eduItems = fourthCard.querySelectorAll('.edu-item');
        
        if (fourthTitle) {
            const icon = fourthTitle.querySelector('i');
            fourthTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.about.education}`;
        }
        
        if (eduItems.length >= 2) {
            // 硕士经历：学校信息加粗 + 奖项徽章
            eduItems[0].innerHTML = `
                <span class="edu-info"><strong>${t.about.edu1}</strong></span>
                <span class="badge bg-primary-soft text-primary award-badge">${t.about.edu1Awards}</span>
            `;
            
            // 本科经历：学校信息加粗 + 奖项徽章
            eduItems[1].innerHTML = `
                <span class="edu-info"><strong>${t.about.edu2}</strong></span>
                <span class="badge bg-primary-soft text-primary award-badge">${t.about.edu2Awards}</span>
            `;
        }
    }
}

// Update Publications Section
function updatePublicationsSection(t) {
    const pubTitle = document.querySelector('#publications h2');
    if (pubTitle) {
        pubTitle.textContent = t.publications.title;
    }
    
    // Re-render publications with new language
    if (typeof papersData !== 'undefined' && typeof renderPapers === 'function') {
        renderPapers(sortPapers([...papersData]));
    }
}

// Update Services Section
function updateServicesSection(t) {
    const servicesTitle = document.querySelector('#services h2');
    if (servicesTitle) {
        servicesTitle.textContent = t.services.title;
    }
    
    const servicesSubtitle = document.querySelector('#services p.text-center');
    if (servicesSubtitle) {
        servicesSubtitle.textContent = t.services.subtitle;
    }
    
    const journalReviewerTitle = document.querySelector('.service-card h3');
    if (journalReviewerTitle) {
        const icon = journalReviewerTitle.querySelector('i');
        journalReviewerTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.services.journalReviewer}`;
    }
}

// Update Gallery Section
function updateGallerySection(t) {
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) {
        galleryTitle.textContent = t.gallery.title;
    }
}

// Update Contact Section
function updateContactSection(t) {
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) {
        contactTitle.textContent = t.contact.title;
    }
    
    const emailTitle = document.querySelector('#contact h4');
    if (emailTitle && emailTitle.textContent === 'Email') {
        emailTitle.textContent = t.contact.email;
    }
    
    const findMeTitle = document.querySelectorAll('#contact h4')[1];
    if (findMeTitle) {
        findMeTitle.textContent = t.contact.findMeOn;
    }
    
    // Social links text
    const socialTexts = document.querySelectorAll('.social-link-large span');
    socialTexts.forEach(span => {
        const text = span.textContent.trim();
        if (text === 'Google Scholar' || text === '谷歌学术') {
            span.textContent = t.contact.googleScholar;
        } else if (text === 'ResearchGate') {
            span.textContent = t.contact.researchGate;
        } else if (text === 'WeChat' || text === '微信') {
            span.textContent = t.contact.weChat;
        }
    });
}

// Update Footer
function updateFooter(t) {
    const footerText = document.querySelector('footer p');
    if (footerText) {
        footerText.textContent = t.footer.welcome;
    }
}

// Get current translation object
function getCurrentTranslation() {
    return translations[currentLanguage];
}

// Make functions globally available
window.toggleLanguage = toggleLanguage;
window.getCurrentTranslation = getCurrentTranslation;
window.currentLanguage = currentLanguage;

// Export for use in papers.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        currentLanguage,
        getCurrentTranslation
    };
}

