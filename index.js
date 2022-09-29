const sections = document.querySelectorAll('section');

const navigationHeight = document.querySelector('.header')

document.documentElement.style.setProperty('scroll-padding', navigationHeight + "px")
// If intersection observer is on section then add underline to nav bar link
const options = {
    root: null,
    rootMargin: '-200px'
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (id === 'home') {
            return
        }
        const navLink = document.querySelector(`.nav-li-link-${id}`)
        if (entry.isIntersecting) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});