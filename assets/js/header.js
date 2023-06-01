window.addEventListener('scroll', function () {
    // const scroll = document.getElementById('parentContent').scrollTop
    const scroll = window.scrollY

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')

    waterBackground.style.transform = `translate(${scroll / 8 }px, ${scroll / 8 }px)`
    for(let i = 0; i < boatBackground.length; i++){
        boatBackground[i].style.transform = `translate(-${scroll / 8 }px, -${scroll / 8 }px)`
    }

    const navbar = document.getElementById('navbar');
    const menuNavbar = document.getElementById('menu-navbar')
    const logoNavbarPath = document.getElementById('logo-navbar-path')
    if (scroll > 28) {
        navbar.classList.add('bg-white/20')
        navbar.classList.add('backdrop-blur-2xl')
        navbar.classList.remove('backdrop-blur-none')
        menuNavbar.classList.add('text-[#1E1E1E]')
        menuNavbar.classList.remove('text-white')
        logoNavbarPath.style.fill = '#1E1E1E'
    }else{
        navbar.classList.remove('bg-white/20')
        navbar.classList.remove('backdrop-blur-2xl')
        navbar.classList.add('backdrop-blur-none')
        menuNavbar.classList.add('text-white')
        menuNavbar.classList.remove('text-[#1E1E1E]')
        logoNavbarPath.style.fill = 'white'
    }
})


document.getElementById('water-backgorund').style.width = `${window.screen.availWidth + 230}px`