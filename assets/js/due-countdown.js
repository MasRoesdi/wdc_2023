const head = document.getElementById('countdown')

const date = new Date()
const due = date.setDate(date.getDate() + 1)

var counter = setInterval(function () {
    var now = new Date().getTime()

    var distance = due - now

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    head.innerHTML = `${hours}:${minutes}:${seconds}`

    if (distance < 0) {
        clearInterval(counter)
        head.innerHTML = "EXPIRED"
    }
}, 1000)

const component_due = document.getElementById('due')
const component_done = document.getElementById('done')
const btn_details = document.getElementById('details')

setTimeout(function () {
    component_due.style.display = 'none'
    component_done.style.display = 'flex'
    btn_details.style.display = "initial"
}, 5000)

const details_display = document.getElementById('details_display')
const btn_close = document.getElementById('close')
const btn_ok = document.getElementById('ok')

btn_details.onclick = function () {
    details_display.style.display = 'flex'
}

btn_close.onclick = function () {
    details_display.style.display = 'none'
}

btn_ok.onclick = function () {
    details_display.style.display = 'none'
}