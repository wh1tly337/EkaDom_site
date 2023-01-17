document.addEventListener('DOMContentLoaded', () => {
    const forAnimation = document.querySelectorAll('.rieltors-image-bg');

    const scrollAnimation2 = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        forAnimation.forEach(el => {
            let scrollOffset = el.offsetTop;
            if (windowCenter >= scrollOffset - 200) {
                el.classList.add('animation-class');
            }
        })
    }

    scrollAnimation2();
    window.addEventListener('scroll', () => {
        scrollAnimation2();
    })
})