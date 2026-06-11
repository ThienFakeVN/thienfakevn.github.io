import {gregorianToJcd, gregorianToJulian} from "./basicJulian.js"
import VietnameseCalendar from "https://esm.sh/@dqcai/vn-lunar@1.0.1"
const {LunarCalendar, getLunarDate, getYearCanChi} = VietnameseCalendar

const today = new Date()
const julianToday = gregorianToJulian(today)
const islamicToday = new Intl.DateTimeFormat("en-GB-u-ca-islamic", {dateStyle: "long"}).format(today)
const persianToday = new Intl.DateTimeFormat("en-GB-u-ca-persian", {dateStyle: "long"}).format(today)
const vietnameseToday = LunarCalendar.today()

function toMonthName(which = false) {
    let monthName
    const whichOne = which ? vietnameseToday._lunarDate.month : julianToday.month

    switch (whichOne) {
        case 1: monthName = "January"; break
        case 2: monthName = "February"; break
        case 3: monthName = "March"; break
        case 4: monthName = "April"; break
        case 5: monthName = "May"; break
        case 6: monthName = "June"; break
        case 7: monthName = "July"; break
        case 8: monthName = "August"; break
        case 9: monthName = "September"; break
        case 10: monthName = "October"; break
        case 11: monthName = "November"; break
        case 12: monthName = "December"; break
    }
    return monthName
}
let toDate = `${today.getDate()} ${today.toLocaleDateString("en-GB", {month: "long"})} ${today.getFullYear()}`
let julianMonth = toMonthName()
let vietnameseMonth = toMonthName(true)

export const packedDates = {
    gregorian: toDate,
    julian: `${julianToday.day} ${julianMonth} ${julianToday.year}`,
    julianDay: `${julianToday.troubleshootHelper[0]}`,
    islamic: `${islamicToday}`,
    persian: `${persianToday}`,
    vietnamese: `${vietnameseToday._lunarDate.day} ${vietnameseMonth} ${vietnameseToday._lunarDate.year}`,
}

if (document.getElementById("today")) {
    if ("Temporal" in globalThis) {
        const todayTemporal = Temporal.Now.zonedDateTimeISO()
        let timeZone = todayTemporal.offset
        document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in UTC${timeZone}.`
    }
    else {document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in whatever your time zone is.`}
    document.getElementById("andSo").innerHTML = "And so, these are your <i>Daily Stuffs</i>:"

    document.getElementById("gregorian").innerHTML = `<b>Gregorian calendar: ${packedDates.gregorian}</b>`
    document.getElementById("julian").innerText = `Julian calendar: ${packedDates.julian}`
    document.getElementById("julianDay").innerText = `Julian day: ${packedDates.julianDay}`
    document.getElementById("islamic").innerText = `Islamic/Lunar Hijri calendar: ${packedDates.islamic}`
    document.getElementById("persian").innerText = `Persian/Solar Hijri calendar: ${packedDates.persian}`
    document.getElementById("vietnamese").innerText = `Vietnamese lunisolar calendar: ${packedDates.vietnamese}`
}
