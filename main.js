let button = document.querySelectorAll('.faq-toggle');
let box = document.querySelectorAll('.faq');


button.forEach(buttons => {
    buttons.addEventListener('click', () => {
        buttons.parentNode.classList.toggle("active");
    })
})