// ===== Configuration File =====

// Social Media Links Configuration
const socialLinks = {
    github: 'https://github.com/RogsXie',
    googleScholar: 'https://scholar.google.com/citations?hl=zh-CN&user=Mw22Z5q6VHAC',
    openReview: 'https://openreview.net/profile?id=~Zhenyang_Xie3',
    email: 'mailto:xiewak@163.com.cn'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = socialLinks;
} else {
    window.socialLinks = socialLinks;
}
