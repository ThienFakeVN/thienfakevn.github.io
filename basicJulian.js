// STUPID MODULES ONLINE NEVER SATISFY ME!!! WHY DO THEY HAVE TO BE IMPORTED IN SUCH STUPID WAYS???
// or maybe i'm the stupid one here who can't even figure out how to import them?
// WHATEVER. I'M CREATING ONE BY MYSELF.

function gregorianToJcd(today = new Date()) {
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    let a = Math.floor((14 - month) / 12)
    let y = year + 4800 + a
    let m = month + 12 * a - 3

    let i = Math.floor((153 * m + 2) / 5)
    let am = 365 * y
    let your = Math.floor(y / 4)
    let obedient = Math.floor(y / 100)
    let servant = Math.floor(y / 400)

    let jcd = day + i + am + your - obedient + servant - 32045
    
    return {
        jcd: jcd,
        troubleshootHelper: [day, month, year, a, y, m, i, am, your, obedient, servant]
        // just think it would be funny to name variables like this lol, also i've added this so that i can check if something goes wrong with my code
    }
}

function gregorianToJulian(today = new Date()) {
    const jcd = gregorianToJcd(today).jcd

    let c = jcd + 32082
    let d = Math.floor((4 * c + 3) / 1461)
    let e = c - Math.floor(1461 * d / 4)
    let m = Math.floor((5 * e + 2) / 153)

    let day = e - Math.floor((153 * m + 2) / 5) + 1
    let month = m + 3 - 12 * Math.floor(m / 10)
    let year = d - 4800 + Math.floor(m / 10)

    return {year: year, month: month, day: day, troubleshootHelper: [jcd, c, d, e, m]} // No more servants of no one!
}

export {gregorianToJcd, gregorianToJulian}
