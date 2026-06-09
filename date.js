import {gregorianToJcd, gregorianToJulian} from "./basicJulian.js"
import VietnameseCalendar from "https://esm.sh/@dqcai/vn-lunar@1.0.1"
const {LunarCalendar, getLunarDate, getYearCanChi} = VietnameseCalendar

const today = new Date()
const julianToday = gregorianToJulian(today)
let month
switch (julianToday.month) {
    case 1: month = "January"; break
    case 2: month = "February"; break
    case 3: month = "March"; break
    case 4: month = "April"; break
    case 5: month = "May"; break
    case 6: month = "June"; break
    case 7: month = "July"; break
    case 8: month = "August"; break
    case 9: month = "September"; break
    case 10: month = "October"; break
    case 11: month = "November"; break
    case 12: month = "December"; break
}
const islamicToday = new Intl.DateTimeFormat("en-GB-u-ca-islamic", {dateStyle: "long"}).format(today)
const vietnameseToday = LunarCalendar.today()

let toDate = `${today.getDate()} ${today.toLocaleDateString("en-GB", {month: "long"})} ${today.getFullYear()}`
if ("Temporal" in globalThis) {
    const todayTemporal = Temporal.Now.zonedDateTimeISO()
    let timeZone = todayTemporal.offset
    document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in UTC${timeZone}.`
}
else {document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in whatever your time zone is.`}
document.getElementById("andSo").innerHTML = "<p>And so, these are your <i>Daily Stuffs</i>:<p>"

document.getElementById("gregorian/julian").innerText = `Should you learn enough about calendars, you will know that ${toDate} is actually the date today in the Gregorian calendar, the same calendar we have used since October 1582. For context, we used to use the Julian calendar back then. Had we still used it now, today would've been ${julianToday.day} ${month} ${julianToday.year}. Very cool, no? Well, there are more interesting calendars that you will find fascinating.`
document.getElementById("islamic").innerHTML = `So, have you heard about &laquo;Ramadan&raquo;? It's one of the month in the Hijri calendar, aka the Islamic calendar. Today in this calendar is ${islamicToday}. Talking about Islam, ...` //(solar/lunar!!!!!)
