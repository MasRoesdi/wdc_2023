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