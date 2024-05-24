// 15.03.2022

function main() {

    // date [Date, SetInterval]
    
    function getClock() {
        const today = new Date();

        const weekdayElem = document.querySelector(".weekday");
        const dateElem = document.querySelector(".date");
        const timeElem = document.querySelector(".time");

        const locale = 'en-GB';
        const weekDayOpt = { weekday: "long" };
        const dateOpt = { day: "2-digit", month: "long", year: "numeric" };
        const timeOpt = { timeStyle: "medium", hourCycle: "h23" };
        // hourCycle: "h23" -> to prevent layout breaking

        weekdayElem.innerHTML = new Intl.DateTimeFormat(locale, weekDayOpt).format(today);

        dateElem.innerHTML = new Intl.DateTimeFormat(locale, dateOpt).format(today);
        // dateElem.innerHTML = today.toLocaleDateString(locale, dateOpt);

        timeElem.innerHTML = new Intl.DateTimeFormat(locale, timeOpt).format(today);
        // timeElem.innerHTML = today.toLocaleTimeString(locale);
    }

    setInterval(getClock, 1000);

    /*
    // manually

    weekdayElem.innerHTML = getMyWeekDay(today);
    dateElem.innerHTML = getMyDate(today);
    timeElem.innerHTML = getMyTime(today);

    function getMyWeekDay(date) {
        daysInWeek = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' };

        return daysInWeek[date.getDay()]
    }

    function getMyDate(date) {
        // const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
    }

    function getMyTime(date) {
        let hours = formatDate(date.getHours());
        let minutes = formatDate(date.getMinutes());
        let seconds = formatDate(date.getSeconds());

        return `${hours}:${minutes}:${seconds}`;
    }

    function formatDate(num) {
        return num < 10 ? `0${num}` : num;
    }

    */

    /*
    
    // location
    const locationElem = document.querySelector(".location");
    let myPosition = new Promise(function(sucess, error) {
        sucess();

        error();
    });

    myPosition.then(
        function(coords) {
            locationElem.innerHTML = coords;
        },

        function(err) {
            locationElem.innerHTML = err;
        }
    )

    locationElem.innerText = myPosition;

    function getMyLocation() {

        if (navigator.geolocation) {
            return new Promise();
        }
        else {
            return "EARTH";
        }
        
        
    }
    
    function sucess() {
        let position = navigator.geolocation.getCurrentPosition(sucess, error)

        const lat = position.coords.latitude.toString();
        const lon = position.coords.longitude.toString();

        console.log(lat, lon);
        return lat, lon;
    }
    
    function error() {
        return "ERR";
    }
    */
}
main();
