    //Scroll-------------------------------------------------------->

    let hiddeForm = document.querySelector('.form'),
        btnForm = document.querySelectorAll('.propduct__btn-click');

    btnForm.forEach(item => {
        item.addEventListener('click', () => {
            hiddeForm.scrollIntoView({
                block: 'center',
                behavior: "smooth"
            })
        })
    });

    
    //Timer--------------------------------------------------------->

    const deadline = '2021-11-11';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), //Parsing
            // days = Math.floor(t / (1000 * 60 * 60 * 24)),
            // hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 30) % 60),
            seconds = Math.floor((t / 1000) % 60);

        return {
            // 'total': t,
            // 'days': days,
            // 'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    function setClock(selector, endtime) {
        // const timer = document.querySelector(selector),
            // days = timer.querySelector('#days'),
            // hours = timer.querySelector('#hours'),
            
        const   minutes = document.querySelector('.minutes'),
                seconds = document.querySelector('.seconds'),

            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            // days.innerHTML = getZero(t.days);
            // hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }
    setClock('.timer', deadline);