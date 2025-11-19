function seasons(date = new Date()) {
    const month = date.getMonth() + 1
    const day = date.getDate()

    if (month >= 3 && month <= 5) {if (month === 3 && day === 30) {return "Reunification Day"} return "Spring"}
    else if (month >= 6 && month <= 8) {return "Summer"}
    else if (month >= 9 && month <= 11) {if (month === 9) {if (day === 2) {return "National Day"} else if (day === 15) {return "My birthday!"}} return "Autumn"}
    else {if (month === 12 && day === 31) {return "Pre-New Year's Day"} if (month === 1 && day === 1) {return "New Year's Day"} return "Winter"}
}

const today = new Date()
const currentSeason = seasons(today)
console.log({month: today.getMonth() + 1, day: today.getDate(), season: currentSeason})
if (currentSeason === "Spring") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/f/fb/XN_Fruehjahrswiese_00.jpg')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: Guido Gerding / Wikimedia Commons / &laquoXN Fruehjahrswiese 00&raquo / CC BY-SA 3.0</p>"
    }
else if (currentSeason === "Reunification Day") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/d7/The_Statue_of_Victory_30-4-1975_at_the_Museum_of_Ho_Chi_Minh_Campaign.JPG')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: HappyMidnight / Wikimedia Commons / &laquoThe Statue of Victory 30-4-1975 at the Museum of Ho Chi Minh Campaign&raquo / CC BY-SA 3.0</p>"
    }
else if (currentSeason === "Summer") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/c/c4/Field_Hamois_Belgium_Luc_Viatour.jpg')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: Luc Viatour | https://Lucnix.be / Wikimedia Commons / &laquoField Hamois Belgium Luc Viatour&raquo / CC BY-SA 3.0</p>"
    }
else if (currentSeason === "Autumn" || currentSeason === "My birthday!") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/d/d0/D%C3%BClmen%2C_Wildpark_--_2014_--_3808_color_balanced.jpg')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: Dietmar Rabich (Derivative work: Sting) / Wikimedia Commons / &laquoDülmen, Wildpark -- 2014 -- 3808 color balanced&raquo / CC BY-SA 4.0</p>"
    }
else if (currentSeason === "National Day") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/3/35/L%C4%83ng_Ch%E1%BB%A7_t%E1%BB%8Bch_H%E1%BB%93_Ch%C3%AD_Minh%2C_H%C3%A0_N%E1%BB%99i.jpeg')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: Linhcandng / Wikimedia Commons / &laquoLăng Chủ tịch Hồ Chí Minh, Hà Nội&raquo / CC BY-SA 3.0</p>"
    }
else if (currentSeason === "Winter") {
    document.getElementById("season").textContent = "body {background-image: url('https://upload.wikimedia.org/wikipedia/commons/b/b0/Winter_forest_silver.jpg')}"
    document.getElementById("credit").innerHTML = "<p>[Credit for the background] Original: Ernst Vikne / Wikimedia Commons / &laquoWinter forest silver&raquo / CC BY-SA 2.0</p>"
    }
