window.addEventListener('scroll', function () {
    // const scroll = document.getElementById('parentContent').scrollTop
    const scroll = window.scrollY

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')

    waterBackground.style.transform = `translate(-${scroll / 7 }px, -${scroll / 7 }px)`
    for(let i = 0; i < boatBackground.length; i++){
        boatBackground[i].style.transform = `translate(-${scroll / 7 }px, -${scroll / 7 }px)`
    }
})