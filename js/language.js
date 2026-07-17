// ===== Language Translation System =====

const translations = {
    en: {
        nav: {
            home: "Home",
            publications: "Publications",
            news: "News",
            internship: "Internship",
            honors: "Honors",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        hero: {
            welcome: "Welcome to Zhenyang Xie's Academic Homepage",
            title: "Graduate Student | School of Information Engineering",
            university: "Jiangxi University of Water Resources and Electric Power",
            collegeOf: "School of Information Engineering",
            intro: "I am a graduate student at the {college}, {university}, supervised by {supervisor}. My research is rooted in computer vision and deep learning. I previously worked on remote sensing image processing and multimodal remote sensing data analysis, and I am now extending that experience toward multi-object tracking, persistent perception, embodied intelligence, and vision-language-action systems. I am also preparing PhD applications for the 2027 cycle."
        },
        buttons: {
            publications: "Publications",
            services: "Services",
            gallery: "Gallery",
            contact: "Contact"
        },
        about: {
            title: "About Me",
            researchFocus: "Research Focus",
            researchFocusText: "My current work focuses on identity preservation and long-term association in multi-object tracking, especially when targets interact, become occluded, or disappear for extended periods. I am also exploring local decision making, multimodal memory updates, and future-state reasoning, with the goal of connecting visual tracking, scene understanding, agent memory, and vision-language-action reasoning for reliable perception and decision making in open environments.",
            researchInterests: "Research Interests",
            interests: [
                "Artificial Intelligence & Deep Learning",
                "Multiple Object Tracking",
                "Computer Vision & Pattern Recognition",
                "Embodied Intelligence",
                "Vision-Language-Action Systems"
            ],
            technicalExpertise: "Technical Expertise",
            technicalText: "Deep Learning, CNNs, Transformer architectures, Selective State Space Model, Multi-Object Tracking, Identity Association, Multimodal Memory, Embodied AI, Vision-Language-Action Reasoning",
            education: "Education",
            edu1: "M.S. in Big Data Technology and Engineering, Jiangxi University of Water Resources and Electric Power (2024.09 - 2027.06)",
            edu1Awards: "National Scholarship · Provincial Academic Scholarship",
            edu2: "B.E. in Software Engineering, Jiangxi Normal University (2020.09 - 2024.06)",
            edu2Awards: "Second-class Scholarship · Merit Student · Outstanding Student Leader · Outstanding Graduate"
        },
        publications: {
            title: "Publications",
            firstSecondAuthor: "First-/Second-Author Publications",
            coauthored: "Co-authored Publications",
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
            esiHighlyCited: "ESI Highly Cited Paper"
        },
        news: {
            title: "News",
            empty: "Updates will be added soon."
        },
        internship: {
            title: "Internship Experience",
            company: "CATL 21C Innovation Laboratory",
            time: "Feb. 2024 - Jun. 2024",
            role: "Intern, Data Governance"
        },
        honors: {
            title: "Honors & Awards",
            empty: "Honors and awards will be added soon."
        },
        services: {
            title: "Academic Services",
            subtitle: "I serve as a reviewer for several prestigious journals in the fields of image processing, remote sensing, and artificial intelligence.",
            journalReviewer: "Journal Reviewer"
        },
        gallery: {
            title: "Research Gallery",
            comingSoon: "Research Gallery Coming Soon",
            comingSoonDesc: "Research photos and images will be displayed here",
            imageNotAvailable: "Image not available"
        },
        contact: {
            title: "Contact",
            email: "Email",
            findMeOn: "Find Me On",
            googleScholar: "Google Scholar",
            openReview: "OpenReview",
            weChat: "WeChat"
        },
        footer: {
            welcome: "Welcome to Zhenyang Xie's Homepage"
        },
        backToTop: "Back to Top"
    },
    zh: {
        nav: {
            home: "首页",
            publications: "学术成果",
            news: "消息动态",
            internship: "实习经历",
            honors: "荣誉和奖项",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        hero: {
            welcome: "欢迎来到谢镇阳的学术主页",
            title: "硕士研究生 | 信息工程学院",
            university: "江西水利电力大学",
            collegeOf: "信息工程学院",
            intro: "我是{university}{college}的硕士研究生，导师为{supervisor}教授。我的研究方向主要围绕计算机视觉与深度学习。此前我主要开展遥感图像处理与多模态遥感数据分析相关研究；目前正在将这些图像理解和时序建模经验拓展到多目标追踪、持续感知、具身智能以及视觉-语言-动作系统等问题中，同时也在准备 2027 年博士申请。"
        },
        buttons: {
            publications: "学术成果",
            services: "学术服务",
            gallery: "图片展示",
            contact: "联系方式"
        },
        about: {
            title: "关于我",
            researchFocus: "研究方向",
            researchFocusText: "我目前更关注多目标追踪中的身份保持与长期关联问题，特别是在复杂交互、遮挡和目标长时间消失等场景下，如何让模型稳定地理解“谁是谁”。在此基础上，我也在探索局部决策、多模态记忆更新和面向未来状态的推理，希望逐步把视觉跟踪、场景理解、智能体记忆与视觉-语言-动作推理连接起来，为开放环境中的持续感知和决策提供更可靠的方法。",
            researchInterests: "研究兴趣",
            interests: [
                "人工智能与深度学习",
                "多目标追踪",
                "计算机视觉与模式识别",
                "具身智能",
                "视觉-语言-动作系统"
            ],
            technicalExpertise: "技术特长",
            technicalText: "深度学习、卷积神经网络、Transformer 架构、选择性状态空间模型、多目标追踪、身份关联、多模态记忆、具身智能、视觉-语言-动作推理",
            education: "教育背景",
            edu1: "江西水利电力大学 · 信息工程学院 · 大数据技术与工程 · 硕士 (2024.09 - 2027.06)",
            edu1Awards: "国家奖学金 · 省学业奖学金",
            edu2: "江西师范大学 · 软件学院 · 软件工程 · 学士 (2020.09 - 2024.06)",
            edu2Awards: "二等奖学金 · 三好学生 · 优秀学生干部 · 优秀毕业生"
        },
        publications: {
            title: "学术成果",
            firstSecondAuthor: "第一/第二作者发表论文",
            coauthored: "合著出版物",
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
            esiHighlyCited: "ESI 高被引论文"
        },
        news: {
            title: "消息动态",
            empty: "消息动态将陆续更新。"
        },
        internship: {
            title: "实习经历",
            company: "宁德时代新能源科技股份有限公司 21C 创新实验中心",
            time: "2024 年 02 月 - 2024 年 06 月",
            role: "实习生（数据治理）"
        },
        honors: {
            title: "荣誉和奖项",
            empty: "荣誉和奖项将陆续更新。"
        },
        services: {
            title: "学术服务",
            subtitle: "我担任图像处理、遥感和人工智能等领域多个学术期刊的审稿人。",
            journalReviewer: "期刊审稿人"
        },
        gallery: {
            title: "科研活动图片",
            comingSoon: "科研图片展示即将推出",
            comingSoonDesc: "科研照片和图像将在此处展示",
            imageNotAvailable: "图像不可用"
        },
        contact: {
            title: "联系方式",
            email: "邮箱",
            findMeOn: "在这里找到我",
            googleScholar: "谷歌学术",
            openReview: "OpenReview",
            weChat: "微信"
        },
        footer: {
            welcome: "欢迎访问谢镇阳的主页"
        },
        backToTop: "返回顶部"
    }
};

let currentLanguage = localStorage.getItem('language') || 'en';

document.addEventListener('DOMContentLoaded', function() {
    initLanguageSystem();
});

function initLanguageSystem() {
    applyLanguage(currentLanguage);

    const langToggle = document.getElementById('languageToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
        updateLanguageButton();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'zh' : 'en';
    localStorage.setItem('language', currentLanguage);
    window.currentLanguage = currentLanguage;

    applyLanguage(currentLanguage);
    updateLanguageButton();

    document.dispatchEvent(new CustomEvent('languageChanged', {
        detail: { language: currentLanguage }
    }));
}

function updateLanguageButton() {
    const langToggle = document.getElementById('languageToggle');
    if (!langToggle) return;

    const icon = langToggle.querySelector('i');
    const text = langToggle.querySelector('.lang-text');

    if (icon) icon.className = 'fas fa-language';
    if (text) text.textContent = currentLanguage === 'zh' ? 'EN' : '中文';
}

function applyLanguage(lang) {
    const t = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);

    updateNavigation(t);
    updateHeroSection(t);
    updateAboutSection(t);
    updatePublicationsSection(t);
    updateNewsSection(t);
    updateInternshipSection(t);
    updateHonorsSection(t);
    updateServicesSection(t);
    updateGallerySection(t);
    updateContactSection(t);
    updateFooter(t);
}

function updateNavigation(t) {
    Object.keys(t.nav).forEach(key => {
        const link = document.querySelector(`.nav-link[href="#${key}"]`);
        if (link) link.textContent = t.nav[key];
    });
}

function updateHeroSection(t) {
    const mainTitle = document.querySelector('.hero-content h1');
    if (mainTitle) mainTitle.textContent = t.hero.welcome;

    const subtitle = document.querySelector('.hero-content h2');
    if (subtitle) subtitle.textContent = t.hero.title;

    const universityHeading = document.querySelector('.hero-content h3');
    if (universityHeading) universityHeading.textContent = t.hero.university;

    const profileTitle = document.querySelector('.profile-title');
    if (profileTitle) profileTitle.textContent = currentLanguage === 'zh' ? '硕士研究生' : 'Graduate Student';

    const profileUniversity = document.querySelector('.profile-university');
    if (profileUniversity) {
        const icon = profileUniversity.querySelector('i');
        profileUniversity.innerHTML = `${icon ? icon.outerHTML : '<i class="fas fa-university me-2"></i>'}${t.hero.university}`;
    }

    const introPara = document.querySelector('.hero-content p');
    if (introPara) {
        const collegeLink = introPara.querySelector('a[href*="computer.juwp.edu.cn/index.htm"]');
        const universityLink = introPara.querySelector('a[href*="www.juwp.edu.cn"]');
        const supervisorLink = introPara.querySelector('a[href*="computer.juwp.edu.cn/info/1059/1911.htm"]');

        if (collegeLink && universityLink && supervisorLink) {
            const collegeClone = collegeLink.cloneNode(true);
            const universityClone = universityLink.cloneNode(true);
            const supervisorClone = supervisorLink.cloneNode(true);

            collegeClone.textContent = t.hero.collegeOf;
            universityClone.textContent = t.hero.university;
            supervisorClone.textContent = currentLanguage === 'zh' ? '吕莉' : 'Prof. Lv Li (吕莉)';

            introPara.innerHTML = t.hero.intro
                .replace('{college}', collegeClone.outerHTML)
                .replace('{university}', universityClone.outerHTML)
                .replace('{supervisor}', supervisorClone.outerHTML);
        }
    }

    document.querySelectorAll('.hero-content a.btn').forEach(btn => {
        const href = btn.getAttribute('href');
        const icon = btn.querySelector('i');
        if (href === '#publications') btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.publications}`;
        if (href === '#services') btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.services}`;
        if (href === '#gallery') btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.gallery}`;
        if (href === '#contact') btn.innerHTML = `${icon ? icon.outerHTML : ''} ${t.buttons.contact}`;
    });
}

function updateAboutSection(t) {
    const aboutTitle = document.querySelector('#about h2');
    if (aboutTitle) aboutTitle.textContent = t.about.title;

    const aboutCards = document.querySelectorAll('.about-card');
    if (aboutCards.length < 4) return;

    updateCardTitle(aboutCards[0], t.about.researchFocus);
    const focusText = aboutCards[0].querySelector('p');
    if (focusText) focusText.textContent = t.about.researchFocusText;

    updateCardTitle(aboutCards[1], t.about.researchInterests);
    const interestsList = aboutCards[1].querySelector('ul');
    if (interestsList) {
        interestsList.innerHTML = t.about.interests.map(item => `<li>${item}</li>`).join('');
    }

    updateCardTitle(aboutCards[2], t.about.technicalExpertise);
    const technicalText = aboutCards[2].querySelector('p');
    if (technicalText) technicalText.textContent = t.about.technicalText;

    updateCardTitle(aboutCards[3], t.about.education);
    const eduItems = aboutCards[3].querySelectorAll('.edu-item');
    if (eduItems.length >= 2) {
        eduItems[0].innerHTML = `
            <span class="edu-info"><strong>${t.about.edu1}</strong></span>
            <span class="badge bg-primary-soft text-primary award-badge">${t.about.edu1Awards}</span>
        `;
        eduItems[1].innerHTML = `
            <span class="edu-info"><strong>${t.about.edu2}</strong></span>
            <span class="badge bg-primary-soft text-primary award-badge">${t.about.edu2Awards}</span>
        `;
    }
}

function updateCardTitle(card, text) {
    const title = card.querySelector('h4');
    if (!title) return;

    const icon = title.querySelector('i');
    title.innerHTML = `${icon ? icon.outerHTML : ''} ${text}`;
}

function updatePublicationsSection(t) {
    const pubTitle = document.querySelector('#publications h2');
    if (pubTitle) pubTitle.textContent = t.publications.title;

    if (typeof papersData !== 'undefined' && typeof renderPapers === 'function' && typeof sortPapers === 'function') {
        renderPapers(sortPapers([...papersData]));
    }
}

function updateNewsSection(t) {
    const title = document.querySelector('#news h2');
    if (title) title.textContent = t.news.title;

    const emptyText = document.querySelector('#news .empty-section-text');
    if (emptyText) emptyText.textContent = t.news.empty;
}

function updateInternshipSection(t) {
    const title = document.querySelector('#internship h2');
    if (title) title.textContent = t.internship.title;

    const company = document.querySelector('.internship-company');
    if (company) company.textContent = t.internship.company;

    const time = document.querySelector('.internship-time');
    if (time) time.textContent = t.internship.time;

    const role = document.querySelector('.internship-role');
    if (role) role.textContent = t.internship.role;
}

function updateHonorsSection(t) {
    const title = document.querySelector('#honors h2');
    if (title) title.textContent = t.honors.title;

    const emptyText = document.querySelector('#honors .empty-section-text');
    if (emptyText) emptyText.textContent = t.honors.empty;
}

function updateServicesSection(t) {
    const servicesTitle = document.querySelector('#services h2');
    if (servicesTitle) servicesTitle.textContent = t.services.title;

    const servicesSubtitle = document.querySelector('#services p.text-center');
    if (servicesSubtitle) servicesSubtitle.textContent = t.services.subtitle;

    const journalReviewerTitle = document.querySelector('.service-card h3');
    if (journalReviewerTitle) {
        const icon = journalReviewerTitle.querySelector('i');
        journalReviewerTitle.innerHTML = `${icon ? icon.outerHTML : ''} ${t.services.journalReviewer}`;
    }
}

function updateGallerySection(t) {
    const galleryTitle = document.querySelector('#gallery h2');
    if (galleryTitle) galleryTitle.textContent = t.gallery.title;
}

function updateContactSection(t) {
    const contactTitle = document.querySelector('#contact h2');
    if (contactTitle) contactTitle.textContent = t.contact.title;

    const emailTitle = document.querySelector('#contact .contact-item h4');
    if (emailTitle) emailTitle.textContent = t.contact.email;

    const findMeTitle = document.querySelector('.contact-social h4');
    if (findMeTitle) findMeTitle.textContent = t.contact.findMeOn;

    document.querySelectorAll('.social-link-large span.d-block').forEach(span => {
        const title = span.closest('a')?.getAttribute('title');
        if (title === 'Google Scholar') span.textContent = t.contact.googleScholar;
        if (title === 'OpenReview') span.textContent = t.contact.openReview;
        if (title === 'WeChat') span.textContent = t.contact.weChat;
    });
}

function updateFooter(t) {
    const footerText = document.querySelector('footer p');
    if (footerText) footerText.textContent = t.footer.welcome;
}

function getCurrentTranslation() {
    return translations[currentLanguage] || translations.en;
}

window.toggleLanguage = toggleLanguage;
window.getCurrentTranslation = getCurrentTranslation;
window.currentLanguage = currentLanguage;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        translations,
        currentLanguage,
        getCurrentTranslation
    };
}
