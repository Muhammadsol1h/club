let headerMenu = document.querySelector('.header__menu')
let headerClose = document.querySelector('.header__close')
let heaederRes = document.querySelector('.heaeder__res')

headerMenu.addEventListener('click', function () {
    heaederRes.classList.add('heaederResActive')
    document.body.style.overflow = 'hidden';
})

headerClose.addEventListener('click', function () {
    heaederRes.classList.remove('heaederResActive')
    document.body.style.overflow = 'auto';
})