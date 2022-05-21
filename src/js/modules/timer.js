const timer = (id, deadline) => {
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t / 60/1000) % 60),
            hours = Math.floor((t / (60*60*1000) % 60)),
            days = Math.floor((t / (60*60*1000 * 24)));

        function AddZero(value) {
            if (value < 10) {
                return `0${value}`
            }
            return `${value}`;
        }
        return {
            'total' : AddZero(t),
            'days': AddZero(days),
            'hours': AddZero(hours),
            'minutes': AddZero(minutes),
            'seconds': AddZero(seconds)
        };
    };
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                days.textContent = 0;              
                hours.textContent = 0;               
                minutes.textContent = 0;
                seconds.textContent = 0;
                clearInterval(timeInterval);
            }
        }

    }
    setClock(id, deadline);
}

export default timer;