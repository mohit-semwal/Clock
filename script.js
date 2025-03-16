let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")

setInterval(()=>{
let time = new Date();

let HOURS = time.getHours();
let MINUTE = time.getMinutes();
let SECOND = time.getSeconds();

second.style.transform = `rotate(${6*SECOND}deg)`
minute.style.transform = `rotate(${6*MINUTE}deg)`
hour.style.transform = `rotate(${30*HOURS + MINUTE/2}deg)`

},1000)









