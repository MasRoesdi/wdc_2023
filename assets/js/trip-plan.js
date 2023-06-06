function slideToLeft(slideToLeftParam, lengthSlide) {
    // const soFar = left + 10 - 50
    const nextElement = document.getElementById(`image${slideToLeftParam}`)
    const nextPoint = document.getElementById(`point${slideToLeftParam}`)
    const arrowRight = document.getElementById('arrow-right')
    const arrowLeft = document.getElementById('arrow-left')

    if (slideToLeftParam != lengthSlide) {
        if (window.screen.availWidth > 768) {
            nextPoint.style.transform = `translateX(-7800%)`
            console.log(window.screen.availWidth)
        } else if(window.screen.availWidth > 680){
            nextPoint.style.transform = `translateX(-${3800 + window.screen.availWidth}%)`
        } else {
            nextPoint.style.transform = `translateX(-${1350 + window.screen.availWidth}%)`
        }
        nextElement.style.transform = `translateX(-${83}%)`
    } else {
        nextElement.style.transform = `translateX(-${66}%)`
        if (window.screen.availWidth > 768) {
            nextPoint.style.transform = `translateX(-6200%)`
        } else if(window.screen.availWidth > 680){
            nextPoint.style.transform = `translateX(-${2800 + window.screen.availWidth}%)`
        }  else {
            nextPoint.style.transform = `translateX(-${1100 + window.screen.availWidth}%)`
        }
    }

    arrowRight.setAttribute('onclick', `slideToLeft(${slideToLeftParam + 1}, ${lengthSlide})`)
    arrowLeft.setAttribute('onclick', `slideToRight(${slideToLeftParam}, ${lengthSlide})`)
}
function slideToRight(slideToRightParam, lengthSlide) {
    if (slideToRightParam != 1) {

        const nextElement = document.getElementById(`image${slideToRightParam}`)
        const nextPoint = document.getElementById(`point${slideToRightParam}`)
        const arrowRight = document.getElementById('arrow-right')
        const arrowLeft = document.getElementById('arrow-left')

        nextElement.style.transform = 'translateX(0px)'
        nextPoint.style.transform = 'translateX(0px)'
        arrowRight.setAttribute('onclick', `slideToLeft(${slideToRightParam}, ${lengthSlide})`)
        arrowLeft.setAttribute('onclick', `slideToRight(${slideToRightParam - 1}, ${lengthSlide})`)
    }
}