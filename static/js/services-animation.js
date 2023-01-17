document.addEventListener('DOMContentLoaded', () => {
    const forAnimation = document.querySelectorAll('.services-image-bg');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        forAnimation.forEach(el => {
            let scrollOffset = el.offsetTop;
            if (windowCenter >= scrollOffset - 200) {
                el.classList.add('animation-class');
            }
        })
    }

    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    })
})