const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

const getTime = () => {
    const date = new Date();

    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    }
}

setInterval(() => {

    const { seconds, minutes, hours } = getTime();

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`; // (360/60)=6 -> A cada segundo o ponteiro vai variar 6 graus.
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`; // (360/60)=6 -> A cada minuto o ponteiro vai variar 6 graus.
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`; // (360/12)=30 -> A cada hora o ponteiro vai variar 30 graus.

}, 1000);