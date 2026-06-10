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
let julianMonth = toMonthName()
let vietnameseMonth = toMonthName(true)

let toDate = `${today.getDate()} ${today.toLocaleDateString("en-GB", {month: "long"})} ${today.getFullYear()}`
if ("Temporal" in globalThis) {
    const todayTemporal = Temporal.Now.zonedDateTimeISO()
    let timeZone = todayTemporal.offset
    document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in UTC${timeZone}.`
}
else {document.getElementById("today").innerText = `What's the date today? Yep, it is ${toDate}! Well, at least in whatever your time zone is.`}
document.getElementById("andSo").innerHTML = "And so, these are your <i>Daily Stuffs</i>:"

document.getElementById("gregorian/julian").innerHTML = `Should you learn enough about calendars, you will know that <u>${toDate}</u> is actually the date today in the Gregorian calendar, the same calendar we have used since October 1582. For context, we used to use the Julian calendar back then. Had we still used it, today would've been <u>${julianToday.day} ${julianMonth} ${julianToday.year}</u>. Very cool, no?`
document.getElementById("islamic").innerHTML = `So, have you heard about &laquo;Ramadan&raquo;? It's one of the month in the Hijri calendar, aka the Islamic calendar. Today in this calendar is <u>${islamicToday}</u>. Talking about Islam and calendars, the well-known Islamic calendar above is a lunar calendar, whose months are based on the cycles of the Moon, and there's actually another Hijri calendar that is based on the Earth's orbit around the Sun. If you are an Iranian, then you should... wait. If you are indeed an Iranian, how the hell do you even have connection to the Internet, I thought they shut down the Internet in Iran, like wtfymihcwtihdygehiicbtlbralfmseifhghteifhnifghtyko`
document.getElementById("persian").innerHTML = `Ok, so anyway, let me just assume that you Iranian is not in Iran right now, or they have finally restored the Internet there. Either way, you should already know about the Solar Hijri calendar, which is the official calendar of Iran. Today in this calendar is <u>${persianToday}</u>.`
document.getElementById("vietnamese").innerHTML = `One more calendar: Today is <u>${vietnameseToday._lunarDate.day} ${vietnameseMonth} ${vietnameseToday._lunarDate.year}</u> in the Vietnamese calendar, which is mainly used to observe lunisolar holidays, such as Tết Nguyên Đán (Lunar New Year) or Tết Trung Thu (Mid-Autumn Festival). This calendar is, in fact, based on the Chinese calendar, and one of the calendars that are based on it. But I'm not adding then any time soon! Since I'm a Vietnamese nationalist, fuck the Chinese and their calendar, haha!`
