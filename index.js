window.onload = function() {

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const appendHours = document.getElementById("hours")
    const appendMinutes = document.getElementById("minutes")
    const appendSeconds = document.getElementById("seconds")
    let interval

    //Buttons
    const buttonStart = document.getElementById("start")
    const buttonStop = document.getElementById("stop")
    const buttonReset = document.getElementById("reset")

    buttonStart.onclick = function () {
        clearInterval(interval)
        interval = setInterval(startTimer, 1000)
    }

    buttonStop.onclick = function() {
        clearInterval(interval)
    }

    buttonReset.onclick = function() {
        clearInterval(interval)
        hours = "00"
        minutes = "00"
        seconds = "00"
        appendHours.innerHTML = hours
        appendMinutes.innerHTML = minutes
        appendSeconds.innerHTML = seconds
        console.log("Working")
    }


    function startTimer() {
        seconds++
        if(seconds <= 9) {
            appendSeconds.innerHTML = "0" + seconds
        }

        if(seconds > 9) {
            appendSeconds.innerHTML = seconds
        }

        if(seconds >= 60) {
            minutes++
            if(minutes <= 9) {
                appendMinutes.innerHTML = "0" + minutes
            }

            if(minutes > 9) {
                appendMinutes.innerHTML = minutes
            }

            seconds = 0
        }

        if(minutes >= 60) {
            hours++
            if(hours <=9) {
                appendHours.innerHTML = "0" + hours
            }

            if(hours >9) {
                appendHours.innerHTML = hours
            }
        }
    }

}