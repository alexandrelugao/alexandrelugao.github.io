
function main() {
    const timer = document.querySelector(".timer");

    const startBtn = document.querySelector(".start");
    // const pauseBtn = document.querySelector(".pause");
    // const resetBtn = document.querySelector(".reset");
    
    // startBtn.addEventListener("click", startTimer);
    // pauseBtn.addEventListener("click", pauseTimer);
    // resetBtn.addEventListener("click", resetTimer);

    // REFACTORING EventListener:
    document.addEventListener('click', function(e) {
        const elem = e.target;

        if (elem == startBtn) startTimer();
        if (elem.classList.contains("pause")) pauseTimer();
        if (elem.classList.contains("reset")) resetTimer();

    });

    let counter = 0;
    let myTime;  // will store a Date obj

    function startTimer(e) {        
        // cancels setInverval from 'myTime'
        // preventing code from creating two timers
        clearInterval(myTime);

        // running = true;
        function updateTime() {
            // creates Date obj from 'counter'
            let myDate = new Date(counter);
            
            // formats Date obj
            myDate = Intl.DateTimeFormat('pt-BR', {timeZone: "UTC", hour: "2-digit", minute: "2-digit", second: "2-digit", fractionalSecondDigits: 2}).format(myDate);
            
            // sets html
            timer.textContent = myDate;

            counter += 10;
        }

        myTime = setInterval(updateTime, 10);
    }
    
    function pauseTimer(e) {
        // cancels setInverval from 'myTime'
        clearInterval(myTime);
        // running = false;
    }

    function resetTimer() {
        // cancels setInverval from 'myTime'
        clearInterval(myTime);
        // reset timer from html
        timer.textContent = "00:00:00,00";
        // running = false;
        
        counter = 0;
        // days.textContent = '';
    }
}    
main();

/*
    // let daysCount;
    // let oneDay = 86400000;

    // let running = false;
    // document.body.addEventListener("keyup", function(e) {
    //     e.preventDefault();
    //     if (e.key == " ") {
    //         if (running) {
    //             pauseTimer();
    //             running = false;
    //         }
    //         startTimer();
    //         running = true;
    //     }
    //     this.onkeydown = null;
    // })


    // if (counter % oneDay == 0) {
    //     days.textContent = counter / oneDay;
    // }

    // adds 10 millisec
*/