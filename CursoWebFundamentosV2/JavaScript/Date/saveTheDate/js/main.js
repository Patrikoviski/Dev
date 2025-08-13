(function () {
    const dateEventDOM = document.querySelector(".hero-content h1 span").innerText
    const heroContent = document.querySelector(".hero-content")
    const dateEvent = getDate(dateEventDOM)
    const today = new Date()
    let left = dateEvent.getTime() - today.getTime()
    const p = document.createElement("p")
    
    const OneSecond = 1 * 1000
    const OneMinute = 60 * OneSecond
    const OneHour = 60 * OneMinute
    const OneDay = 24 * OneHour

    const daysLeft = parseInt(left / OneDay)
    left = left - daysLeft * OneDay

    const hoursLeft = parseInt(left / OneHour)
    left = left - hoursLeft * OneHour

    const minutesLeft = parseInt(left / OneMinute)
    left = left - minutesLeft * OneMinute

    const secondsLeft = parseInt(left / 1000)

    p.textContent = `Contagem regressiva: ${daysLeft}: ${hoursLeft}H:${minutesLeft}:${secondsLeft}`

    heroContent.appendChild(p)

    


    function getDate(str) {
        const [date, clock] = str.split(" ")
        const [day, month, year] = date.split("/")
        const [hour, minute] = clock.split("H")
        return new Date(year, month - 1, day, hour, minute)
    }
})()