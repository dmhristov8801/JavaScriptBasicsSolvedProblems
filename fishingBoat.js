function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = (input[1]);
    let fisherNum = Number(input[2]);
    let totalPrice = 0;


    if (season == "Spring" && fisherNum <= 6) {
        totalPrice = 3000 * 0.90;
    } else if (season == "Spring" && fisherNum >= 7 && fisherNum <= 11) {
        totalPrice = 3000 * 0.85;
    } else if (season == "Spring" && fisherNum > 12) {
        totalPrice = 3000 * 0.75;
    } else if (season == "Summer" && fisherNum <= 6) {
        totalPrice = 4200 * 0.90;
    } else if (season == "Summer" && fisherNum >= 7 && fisherNum <= 11) {
        totalPrice = 4200 * 0.85;
    } else if (season == "Summer" && fisherNum > 12) {
        totalPrice = 4200 * 0.75;
    } else if (season == "Winter" && fisherNum <= 6) {
        totalPrice = 2600 * 0.90;
    } else if (season == "Winter" && fisherNum >= 7 && fisherNum <= 11) {
        totalPrice = 2600 * 0.85;
    } else if (season == "Winter" && fisherNum > 12) {
        totalPrice = 2600 * 0.75;
    } else if (season == "Autumn" && fisherNum <= 6) {
        totalPrice = 4200 * 0.90;
    } else if (season == "Autumn" && fisherNum >= 7 && fisherNum <= 11) {
        totalPrice = 4200 * 0.85;
    } else if (season == "Autumn" && fisherNum > 12) {
        totalPrice = 4200 * 0.75;
    }
    if (fisherNum % 2 == 0 && season != "Autumn") {
        totalPrice = totalPrice * 0.95;
    }


    let diff = Math.abs(totalPrice - budget);
    if (totalPrice <= budget) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else if (totalPrice > budget) {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }




}
fishingBoat(["2000", "Winter", "13"])