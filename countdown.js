// const day = document.getElementById("oldDays");
// const hour = document.getElementById("oldHours");
// const minute = document.getElementById("oldMinutes");
// const second = document.getElementById("oldSeconds");

// // let deadline = new Date("March 25, 2024 12 : 00 : 00").getTime();
// // let x = setInterval(function () {
// // let now = new Date().getTime();
// // let programme = deadline - now;


// const seconds = second.value;

// // const days = Math.floor(programme / (1000 * 60 * 60 * 24));
// // const hours = Math.floor((programme % (1000 * 60 * 60 * 42)) / (1000 * 60 * 60));
// // const minutes = Math.floor((programme % (1000 * 60 * 60)) / (1000 * 60));
// // const seconds = Math.floor((programme % (1000 * 60)) / 1000);

// // document.getElementById("demo").innerHTML = "04" + "20" + "40"  + "50";

// // day.innerHTML = "08";
// // hour.innerHTML = "23";
// // minute.innerHTML = "55";
// // second.innerHTML = "41";

// // if (programme < 0) {
// //     clearInterval(x);
// //     console.log("Expired");
// // }
// // },1000);
// for (let seconds = 41 - 1; seconds >= 0; seconds--) {
//     console.log(seconds);
//     // second.innerHTML = seconds--;
// }



setInterval(function(){

const date = new Date()
const day =  date.getUTCDate()
const hour = date.getHours()
const minute = date.getMinutes()
const second = date.getSeconds()

const dayElement = document.getElementById("oldDays");
const hourElement = document.getElementById("oldHours");
const minuteElement = document.getElementById("oldMinutes");
const secondElement = document.getElementById("oldSeconds");

    dayElement.innerHTML = day;
    hourElement.innerHTML = hour;
    minuteElement.innerHTML = minute;
    secondElement.innerHTML = second;
},1000)

