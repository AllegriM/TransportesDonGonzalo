//scroll smooth

const navigationHeight = document.querySelector('.header-nav-box').offsetHeight;
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + "px")

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

//header scroll 

const header = document.querySelector('.header-box-img')
const nav = document.querySelector('.header-nav-box')
const imgDesktop = document.querySelector('.header-img-desktop')
const imgNav = document.querySelector('.header-nav-img')
const headerCont = document.querySelector('.header-container')

if (window.screen.width > 768) {
    window.onscroll = () => {
        if (window.pageYOffset > 80) {
            headerCont.style = 'transform: translateY(-15vh)'
            imgNav.style = `pointer-events: all;
            filter: opacity(1);`

        } else {
            header.style = "height: 15vh"
            headerCont.style = 'transform: translateY(0)'
            imgNav.style = `pointer-events: none;
            filter: opacity(0);`
        }
    }
}

//EMAIL JS

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();
        if (document.querySelector('#from_name').value == '' || document.querySelector('#email_id') == '' || document.querySelector('#message') == '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Todos los campos son obligatorios',
            })
            return
        }

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_ukg47ij';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                Swal.fire({
                    icon: 'success',
                    title: 'Correo enviado exitosamente!'
                })
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });