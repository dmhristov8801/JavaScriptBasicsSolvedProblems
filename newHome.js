function newHome(input) {

    let flowerType = (input[0]);
    let flowerNum = Number(input[1]);
    let budget = Number(input[2]);
    let totalPrice = 0;

    if (flowerType == "Roses") {
        if (flowerNum > 80) {
            totalPrice = (flowerNum * 5) * 0.90;
        } else {
            totalPrice = flowerNum * 5;
        }
    } else if (flowerType == "Dahlias") {
        if (flowerNum > 90) {
            totalPrice = (flowerNum * 3.80) * 0.85;
        } else {
            totalPrice = flowerNum * 3.80;
        }

    } else if (flowerType == "Tulips") {
        if (flowerNum > 80) {
            totalPrice = (flowerNum * 2.80) * 0.85;
        } else {
            totalPrice = flowerNum * 2.80;
        }

    } else if (flowerType == "Narcissus") {
        if (flowerNum < 120) {
            totalPrice = (flowerNum * 3) * 1.15;
        } else {
            totalPrice = flowerNum * 3;
        }
    } else if (flowerType == "Gladiolus") {
        if (flowerNum < 80) {
            totalPrice = (flowerNum * 2.50) * 1.20;
        } else {
            totalPrice = flowerNum * 2.50;
        }
    }
    let diff = Math.abs(totalPrice - budget);
    if (totalPrice <= budget) {
        console.log(`Hey, you have a great garden with ${flowerNum} ${flowerType} and ${diff.toFixed(2)} leva left.`)
    } else if (totalPrice > budget) {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
    }
}
newHome(["Narcissus", "119", "360"])