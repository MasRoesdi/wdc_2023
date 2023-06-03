window.addEventListener('scroll', function () {
    onScroll()
})
window.addEventListener('touchmove', function () {
    onScroll()
})

function onScroll() {
    var scroll = window.scrollY

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')


    waterBackground.style.transform = `translate(${scroll / 7}px, ${scroll / 7}px)`
    for (let i = 0; i < boatBackground.length; i++) {
        boatBackground[i].style.transform = `translate(-${scroll / 7}px, -${scroll / 7}px)`
    }

    const navbar = document.getElementById('navbar');
    const menuNavbar = document.getElementById('menu-navbar')
    const logoNavbarPath = document.getElementById('logo-navbar-path')
    const hamburgerMenu = document.querySelectorAll('.hamburger-menu');
    if (scroll > 48) {
        navbar.classList.add('bg-white/20')
        navbar.classList.add('backdrop-blur-xl')
        navbar.classList.remove('backdrop-blur-none')
        if (window.screen.availWidth > 680) {
            menuNavbar.classList.add('text-[#1E1E1E]')
            menuNavbar.classList.remove('text-white')
        }
        menuNavbar.classList.add('text-[#1E1E1E]')
        menuNavbar.classList.remove('md:text-white')
        logoNavbarPath.style.fill = '#1E1E1E'
        for (let i = 0; i < hamburgerMenu.length; i++) {
            const element = hamburgerMenu[i];
            element.classList.add('bg-[#1E1E1E]')
            element.classList.remove('bg-white')
        }
    } else {
        navbar.classList.remove('bg-white/20')
        navbar.classList.remove('backdrop-blur-xl')
        navbar.classList.add('backdrop-blur-none')
        if (window.screen.availWidth > 680) {
            menuNavbar.classList.add('md:text-white')
            menuNavbar.classList.remove('text-[#1E1E1E]')
        }
        logoNavbarPath.style.fill = 'white'
        for (let i = 0; i < hamburgerMenu.length; i++) {
            const element = hamburgerMenu[i];
            element.classList.remove('bg-[#1E1E1E]')
            element.classList.add('bg-white')
        }
    }
}

const waterBackground = document.getElementById('water-backgorund')
const parentBackgroundParent = document.getElementById('parentBackgroundParent')
if (window.screen.availWidth > 1024) {
    parentBackgroundParent.style.height = `${window.screen.height + 50}px`
}
waterBackground.style.width = `${window.screen.availWidth + 230}px`
waterBackground.style.height = `${window.screen.height + 230}px`

const search = document.getElementById('searchDestination')
const searchSuggestion = document.getElementById('searchSuggestion')
document.getElementById('searchDestination').addEventListener('keyup', function () {
    // console.log(search.value)
    const loader = document.getElementById('loaderSearch')
    const list = document.getElementById('listSearch')
    // console.log(search.value.length)
    if (search.value.length == 0) {
        searchSuggestion.classList.add('hidden')
    } else {
        searchSuggestion.classList.remove('hidden')
        loader.classList.remove('hidden')
        list.classList.add('hidden')
        setTimeout(function () {
            loader.classList.add('hidden')
            list.classList.remove('hidden')
        }, 600)
    }
})
function setSearch(param) {
    search.value = param
    searchSuggestion.classList.add('hidden')
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