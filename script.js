

const validAmount = (amount) => {
    if (amount >= 5 && amount <= 500) {
        return true
    } else {
        alert("Invalid Input")
        return false
    }
}

const validService = (quality) => {
    if (quality == "great" || quality == "ok" || quality == "poor") {
        return true
    } else {
        alert("Invalid Input")
        return false
    }
}

const calcTip = (amount, tip, quality) => {
    tipAmount = tip * 100
    alert(`Your service was $${amount}, your recommended tip is $${tipAmount}, based on the ${quality} rating you gave us.`)
}

let tip = 0
let amount = prompt("How much was the service? ($5 - $500): ")
if (validAmount(amount) == true) {
    let quality = prompt("Quality of the service? (great, ok, or poor):")
    validService(quality)
    if (quality == "great") {
        tip = 0.20
    } else if (quality == "ok") {
        tip = 0.15
    } else if (quality == "poor") {
        tip = 0.10
    }

    calcTip(amount, tip, quality)
}












