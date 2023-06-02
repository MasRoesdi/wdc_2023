window.addEventListener('scroll', function () {
    onScroll()
})
window.addEventListener('touchmove', function () {
    onScroll()
    // var scrollPosition = window.scrollY || window.pageYOffset;
    // alert(scrollPosition)
})

function onScroll() {
    var scroll = window.scrollY

    // alert(window.pageYOffset)

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')

    
    waterBackground.style.transform = `translate(${scroll / 7 }px, ${scroll / 7 }px)`
    for(let i = 0; i < boatBackground.length; i++){
        boatBackground[i].style.transform = `translate(-${scroll / 7 }px, -${scroll / 7 }px)`
    }

    const navbar = document.getElementById('navbar');
    const menuNavbar = document.getElementById('menu-navbar')
    const logoNavbarPath = document.getElementById('logo-navbar-path')
    const hamburgerMenu = document.querySelectorAll('.hamburger-menu');
    if (scroll > 48) {
        navbar.classList.add('bg-white/20')
        navbar.classList.add('backdrop-blur-xl')
        navbar.classList.remove('backdrop-blur-none')
        menuNavbar.classList.add('text-[#1E1E1E]')
        menuNavbar.classList.remove('text-white')
        logoNavbarPath.style.fill = '#1E1E1E'
        for (let i = 0; i < hamburgerMenu.length; i++) {
            const element = hamburgerMenu[i];
            element.classList.add('bg-[#1E1E1E]')
            element.classList.remove('bg-white')
        }
    }else{
        navbar.classList.remove('bg-white/20')
        navbar.classList.remove('backdrop-blur-xl')
        navbar.classList.add('backdrop-blur-none')
        menuNavbar.classList.add('text-white')
        menuNavbar.classList.remove('text-[#1E1E1E]')
        logoNavbarPath.style.fill = 'white'
        for (let i = 0; i < hamburgerMenu.length; i++) {
            const element = hamburgerMenu[i];
            element.classList.remove('bg-[#1E1E1E]')
            element.classList.add('bg-white')
        }
    }
}

const waterBackground = document.getElementById('water-backgorund')
waterBackground.style.width = `${window.screen.availWidth + 230}px`
waterBackground.style.height = `${window.screen.height + 230}px`