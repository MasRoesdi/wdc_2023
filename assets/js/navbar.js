window.addEventListener('scroll', function () {
    onScroll()
})
window.addEventListener('touchmove', function () {
    onScroll()
})

function onScroll() {
    var scroll = window.scrollY

    const navbar = document.getElementById('navbar');
    const menuNavbar = document.getElementById('menu-navbar')
    const logoNavbarPath = document.getElementById('logo-navbar-path')
    const hamburgerMenu = document.querySelectorAll('.hamburger-menu');
    if (scroll > 48) {
        if (!navbar.classList.contains('no-transform')) {
            logoNavbarPath.style.fill = '#1E1E1E'
            if (window.screen.availWidth > 680) {
                menuNavbar.classList.add('text-[#1E1E1E]')
                menuNavbar.classList.remove('md:text-white')
            }
            for (let i = 0; i < hamburgerMenu.length; i++) {
                const element = hamburgerMenu[i];
                element.classList.add('bg-[#1E1E1E]')
                element.classList.remove('bg-white')
            }
        }
        navbar.classList.add('bg-white/20')
        navbar.classList.add('backdrop-blur-xl')
        navbar.classList.remove('backdrop-blur-none')
        // menuNavbar.classList.add('text-[#1E1E1E]')
        // menuNavbar.classList.remove('md:text-white')
    } else {
        navbar.classList.remove('bg-white/20')
        navbar.classList.remove('backdrop-blur-xl')
        navbar.classList.add('backdrop-blur-none')
        if (!navbar.classList.contains('no-transform')) {
            logoNavbarPath.style.fill = 'white'
            if (window.screen.availWidth > 680) {
                menuNavbar.classList.add('md:text-white')
                menuNavbar.classList.remove('text-[#1E1E1E]')
            }
            for (let i = 0; i < hamburgerMenu.length; i++) {
                const element = hamburgerMenu[i];
                element.classList.remove('bg-[#1E1E1E]')
                element.classList.add('bg-white')
            }
        }
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