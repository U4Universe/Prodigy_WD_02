let tens = 00;
let seconds = 00;
let minutes = 00;
let getSeconds =  document.querySelector('.seconds');
let getTens =  document.querySelector('.tens');
let getMinutes =  document.querySelector('.minutes');
let btnStart = document.querySelector('.btn-start');
let btnStop = document.querySelector('.btn-stop');
let btnReset = document.querySelector('.btn-reset');
let interval;

btnStart.addEventListener('click',()=>{
    interval = setInterval(startTimer, 10)
})
btnStop.addEventListener('click', ()=>{
    clearInterval(interval);
})
btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    minutes = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMinutes.innerHTML = minutes;
})

function startTimer() {
    tens++;

    if (tens <= 9) {
        getTens.innerHTML = '0' + tens;
    } else {
        getTens.innerHTML = tens;
    }

    if (tens === 100) {
        tens = 0;
        seconds++;
        getTens.innerHTML = '00';

        if (seconds <= 9) {
            getSeconds.innerHTML = '0' + seconds;
        } else {
            getSeconds.innerHTML = seconds;
        }
    }

    if (seconds === 60) {
        seconds = 0;
        minutes++;
        getSeconds.innerHTML = '00';

        if (minutes <= 9) {
            getMinutes.innerHTML = '0' + minutes;
        } else {
            getMinutes.innerHTML = minutes;
        }
    }
}
