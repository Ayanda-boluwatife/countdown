const durations = document.querySelectorAll('.countdown-item .duration');

const today = new Date();
const year = today.getFullYear();
const date = today.getDate()
const month = today.getMonth();

const target = new Date(year, month, date+15, 0, 0, 0)

function formatTime(number) {
    if (number < 10) {
        return `0${number}`
    }
    return number
}

function timeLeft(endDate=target) {
    const today = new Date();
    const diff = endDate.getTime() - today.getTime()

    if (diff <= 0) {
        clearInterval(constId)
        return 
    }
    const oneDay = 24 * 60 * 60 * 1000; // milli seconds
    const oneHour = 60 * 60 * 1000; // milli seconds
    const oneMin = 60 * 1000; // milli seconds
    const oneSec = 1000; // milli seconds
    
    const daysRemain = Math.floor(diff / oneDay);
    const hoursRemain = Math.floor((diff % oneDay) / oneHour);
    const minsRemain = Math.floor((diff % oneHour) / oneMin);
    const secsRemain = Math.floor((diff % oneMin) / oneSec);

    const durationLeft = [formatTime(daysRemain), formatTime(hoursRemain), formatTime(minsRemain), formatTime(secsRemain)]

    durations.forEach((element, i) => {
        element.textContent = durationLeft[i]
    })
}

const constId = setInterval(() => timeLeft(), 1000)
timeLeft()
