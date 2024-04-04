// select all html id
const date = document.getElementById("date");
const day = document.getElementById("day");
const year = document.getElementById("year");
const month = document.getElementById("month");
const time = document.getElementById("time");

// window onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  // getDate
  let getDate = new Date().getDate();
  date.innerHTML = getDate;

  //   getDay
  let getDay = new Date();
  let dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = dayOfWeek[getDay.getDay()];
  day.innerHTML = currentDay;

  //   getYear
  let getYear = new Date().getFullYear();
  year.innerHTML = getYear;

  //   getMonth
  let getMonth = new Date();
  const monthOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "Jun",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentMonth = monthOfYear[getMonth.getMonth()];
  month.innerHTML = currentMonth;

  // get time
  function setTimeFun() {
    let myTime = new Date();
    let hour = myTime.getHours();
    let min = myTime.getMinutes();
    let sec = myTime.getSeconds();

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }

    hour = checkTime(hour);
    min = checkTime(min);
    sec = checkTime(sec);

    let currentTime = `${hour}:${min}:${sec}`;
    time.innerHTML = currentTime;
  }
  setInterval(() => {
    setTimeFun();
  }, 1000);
}
