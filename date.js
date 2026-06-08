import VietnameseCalendar from "https://esm.sh/@dqcai/vn-lunar@1.0.1"
const {LunarCalendar, getLunarDate, getYearCanChi} = VietnameseCalendar

const today = new Date()
const islamicToday = new Intl.DateTimeFormat("en-GB-u-ca-islamic", {dateStyle: "full"}).format(today)
const vietnameseToday = LunarCalendar.today()

let toDate = `${today.getDate()} ${today.toLocaleDateString("en-GB", {month: "long"})} ${today.getFullYear()}`
if ("Temporal" in globalThis) {
    const todayTemporal = Temporal.Now.zonedDateTimeISO()
    let timeZone = todayTemporal.offset
    document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in UTC${timeZone}.`
}
else {document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in whatever your time zone is.`}
document.getElementById("andSo").innerHTML = "<p>And so, these are your <i>Daily Stuffs</i>:<p>"

document.getElementById("gregorian").innerText = `Should you learn enough about calendars, you will know that ${toDate} is actually the date today in the Gregorian calendar, the same calendar we have used since October 1582.`
//
console.log(islamicToday)
console.log(vietnameseToday)