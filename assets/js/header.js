window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY
    // console.log(scrollPosition)

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')

    // if (waterBackground != undefined && boatBackground != undefined) {
    waterBackground.style.transform = `translate(${scrollPosition / 7}px, ${scrollPosition / 7}px)`
    for (let i = 0; i < boatBackground.length; i++) {
        boatBackground[i].style.transform = `translate(-${scrollPosition / 7}px, -${scrollPosition / 7}px)`
    }
    // }
})
window.addEventListener('touchmove', function () {
    let scrollPosition = window.scrollY

    const waterBackground = document.getElementById('water-backgorund')
    const boatBackground = document.querySelectorAll('.boat_background')

    // if (waterBackground != undefined && boatBackground != undefined) {
    waterBackground.style.transform = `translate(${scrollPosition / 7}px, ${scrollPosition / 7}px)`
    for (let i = 0; i < boatBackground.length; i++) {
        boatBackground[i].style.transform = `translate(-${scrollPosition / 7}px, -${scrollPosition / 7}px)`
    }
    // }
})

// function onScroll() {
//     let scrollPosition = window.scrollY
//     console.log(scrollPosition)

//     const waterBackground = document.getElementById('water-backgorund')
//     const boatBackground = document.querySelectorAll('.boat_background')

//     // if (waterBackground != undefined && boatBackground != undefined) {
//     waterBackground.style.transform = `translate(${scrollPosition / 7}px, ${scrollPosition / 7}px)`
//     for (let i = 0; i < boatBackground.length; i++) {
//         boatBackground[i].style.transform = `translate(-${scrollPosition / 7}px, -${scrollPosition / 7}px)`
//     }
//     // }
// }

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