// 点赞功能
document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', function() {
        const span = this.querySelector('span');
        let likes = parseInt(span.textContent);
        span.textContent = likes + 1;
        this.style.color = '#fd79a8';
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 社交分享功能
document.querySelectorAll('.share-button').forEach(button => {
    button.addEventListener('click', function() {
        const text = 'Check out this awesome game Sprunki! #MixFreshBeats #CreateUniqueMusic';
        const url = window.location.href;
        
        let shareUrl = '';
        if (this.classList.contains('twitter')) {
            shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        } else if (this.classList.contains('facebook')) {
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        } else if (this.classList.contains('instagram')) {
            // Instagram doesn't support direct sharing via URL
            alert('Copy this link to share on Instagram: ' + url);
            return;
        }
        
        window.open(shareUrl, '_blank', 'width=600,height=400');
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 50) {
        nav.style.transform = 'translateY(-100%)';
    } else {
        nav.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// 游戏区域响应式调整
window.addEventListener('resize', () => {
    const gameFrame = document.querySelector('.game-frame');
    if (gameFrame) {
        const width = gameFrame.offsetWidth;
        gameFrame.style.height = (width * 9 / 16) + 'px';
    }
});

// 初始化调用
window.dispatchEvent(new Event('resize')); 