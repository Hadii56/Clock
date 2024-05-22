const hourEle = document.querySelector(".hour")
const minuteEle = document.querySelector(".minute")
const secondEle = document.querySelector(".second")
setInterval(() => {
    let date = new Date()
    hour = date.getHours()*30
    minute = date.getMinutes()*6
    second = date.getSeconds()*6

    hourEle.style.transform = `rotateZ(${(hour)
        +minute/12}deg)`
    minuteEle.style.transform = `rotateZ(${(minute)
    }deg)`
    secondEle.style.transform = `rotateZ(${(second)
        }deg)`
}, );
