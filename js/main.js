// Действующие эдементы на странице

const year = document.querySelector('#year')

const days = document.querySelector('#days')

const hours = document.querySelector('#hours')

const minutes = document.querySelector('#minutes')

const seconds = document.querySelector('#seconds')

const countdown = document.querySelector('#countdown')

const preloader = document.querySelector('#preloader')

// Делаем расчеты

const currentYear = new Date().getFullYear() // текущий год

const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`)  // следующий год


// Устанавливаем год на страницу

year.innerText = currentYear + 1



const updateCounter = () => {
    const currentTime = new Date() // время сейчас

    const diff = nextYear - currentTime // сколько времени осталось

// Перевод в дни

    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24) // сколько дней осталось

    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24  // сколько часов осталось

    const minutesLeft = Math.floor(diff / 1000 / 60) % 60 // сколько минут осталось

    const secondsLeft = Math.floor(diff / 1000) % 60 // сколько секунд всего


    days.innerText = daysLeft
    hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft
    minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft
    seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft
}

updateCounter()

// Обновление функции каждую секунду

setInterval(updateCounter, 1000)


// Показываем счет события после загрузки

setTimeout(function (){
    preloader.remove()
    countdown.style.display = 'flex'
}, 1000)

