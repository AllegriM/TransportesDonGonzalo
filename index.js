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