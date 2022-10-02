//scroll smooth

const navigationHeight = document.querySelector('#header').offsetHeight;

document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 20 + "px")
const options = {
    root: null,
    threshold: .5
};

//link active

const sections = document.querySelectorAll('section');

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

//scroll reveal

const faqs = document.querySelectorAll('.faq-box')
const services = document.querySelectorAll('.services-box')

const observerReveal = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-reveal');
        }
    })
})

faqs.forEach(box => {
    observerReveal.observe(box)
})

services.forEach(box => {
    observerReveal.observe(box)
})

// Send email

const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#descripcion');
const buttonSend = document.querySelector('.form-button');

// Complete input forms and open email window

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open(`
    mailto:fernandinhocelis@gmail.com
    ?subject= Este asunto esta hardcodeado
    &body= Hola, mi nombre es ${nameInput.value},
    ${messageInput.value}
    `);
    form.reset();
});
