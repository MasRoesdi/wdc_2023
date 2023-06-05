window.addEventListener('scroll', function () {
    onScroll()
})
window.addEventListener('touchmove', function () {
    onScroll()
})

function onScroll() {
    var scroll = window.scrollY

    const navbar = document.getElementById('navbar');
    if (scroll > 48) {
        navbar.classList.add('bg-white/20')
        navbar.classList.add('backdrop-blur-xl')
        navbar.classList.remove('backdrop-blur-none')
    } else {
        navbar.classList.remove('bg-white/20')
        navbar.classList.remove('backdrop-blur-xl')
        navbar.classList.add('backdrop-blur-none')
    }
}

function openMenu() {
    const menus = document.getElementById('menu-navbar');

    menus.classList.remove('hidden')
    menus.classList.add('flex')
    setTimeout(() => {
        menus.classList.remove('translate-y-full')
        menus.classList.add('translate-y-0')
    }, 100)
}

function closeMenu() {
    const menus = document.getElementById('menu-navbar');

    menus.classList.add('translate-y-full')
    menus.classList.remove('translate-y-0')
    setTimeout(() => {
        menus.classList.add('hidden')
        menus.classList.remove('flex')
    }, 100)
}