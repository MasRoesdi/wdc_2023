// document.addEventListener("DOMContentLoaded", function (event) {


//     setTimeout(typeWriter(), 1000)
// });

// function slideTop(elm) {
//     const element = document.querySelector(elm)
//     const body = document.getElementsByTagName('body')

//     body[0].classList.remove('overflow-hidden')
//     element.style.transform = 'translateY(-100vh)'
// }
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('onBording').style.backgroundImage = 'url(../../assets/images/on_boarding_background.png)';

    const background_peta_indonesia = document.getElementById('background_peta_indonesia')
    background_peta_indonesia.style.backgroundImage = 'url(../../assets/images/background_peta_indonesia.png)'

    setTimeout(function () {
        background_peta_indonesia.style.opacity = '1'
    }, 2000)

    var textP = "EXPLORE THE WONDERFULL OF";
    var speedP = 100; // Kecepatan pengetikan dalam milidetik
    var iP = 0;

    var textH = "INDONESIA";
    var speedH = 100; // Kecepatan pengetikan dalam milidetik
    var iH = 0;

    function typeWriterP() {
        if (iP < textP.length) {
            document.getElementById("pOnBoarding").innerHTML += textP.charAt(iP);
            iP++;
            setTimeout(typeWriterP, speedP);
        }
    }
    function typeWriterH() {
        if (iH < textH.length) {
            document.getElementById("hOnBoarding").innerHTML += textH.charAt(iH);
            iH++;
            setTimeout(typeWriterH, speedH);
        }
    }
    setTimeout(typeWriterP, 5000)
    setTimeout(typeWriterH, 8000)

    setTimeout(function () {
        const element = document.getElementById('onBording')
        const body = document.getElementsByTagName('body')

        body[0].classList.remove('overflow-hidden')
        element.style.transform = 'translateY(-100vh)'
    }, 10000)
})