let horElement = document.querySelector('.horas');
let minElement = document.querySelector('.minutos');
let secElement = document.querySelector('.segundos');
let miliSecElement = document.querySelector('.milisegundos');
let times = document.querySelectorAll('.times');

let btnIniciar = document.querySelector('.btn-iniciar');
let btnPausar = document.querySelector('.btn-pausar');
let btnZerar = document.querySelector('.btn-zerar');

let hor = 0;
let sec = 0;
let min = 0;
let miliSec = 0;
let intervalo;
let cont = 1;

function iniciar() {
    if(cont){
        intervalo = setInterval(()=>{
            miliSec++
            renderTimes()
        },10)

        times.forEach((time)=>{
            time.classList.remove('animationTimer')
        })
        cont = 0;
    }
}

function pausar() {
    clearInterval(intervalo)
    times.forEach((time)=>{
        if(miliSec > 0){
            time.classList.add('animationTimer')
        }
    })
    cont = 1;
}

function zerar() {
    clearInterval(intervalo)
    miliSec = 0
    sec = 0
    min = 0
    hor = 0
    miliSecElement.innerHTML = acrescentarZero(miliSec)
    secElement.innerHTML = acrescentarZero(sec)
    minElement.innerHTML = acrescentarZero(min)
    horElement.innerHTML = acrescentarZero(hor)

    times.forEach((time)=>{
        time.classList.remove('animationTimer')
    })
    cont = 1;
}

function renderTimes() {
    miliSecElement.innerHTML = acrescentarZero(miliSec)
    secElement.innerHTML = acrescentarZero(sec)
    minElement.innerHTML = acrescentarZero(min)
    horElement.innerHTML = acrescentarZero(hor)
    checagem()
}

function checagem() {
    if(miliSec == 100){
        miliSec = 0
        sec++
    }else if(sec == 60) {
        sec = 0
        min++
    }else if(min == 60){
        min = 0
        hor++
    }
}

function acrescentarZero(num) {
    if(num < 10){
        return '0' + num
    }else {
        return num
    }
}

btnIniciar.addEventListener('click', iniciar)
btnPausar.addEventListener('click', pausar)
btnZerar.addEventListener('click', zerar)