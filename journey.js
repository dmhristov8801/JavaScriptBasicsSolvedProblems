function journey(input) {

    let budget = Number(input[0]);
    let season = (input[1]);
    let totalPrice = 0;
    let destination = '';
    let place = '';

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer": totalPrice = budget - (budget * 0.70);
                place = "Camp"; break;
            case "winter": totalPrice = budget - (budget * 0.30);
                place = "Hotel"; break;
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer": totalPrice = budget - (budget * 0.60);
                place = "Camp"; break;
            case "winter": totalPrice = budget - (budget * 0.20);
                place = "Hotel"; break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        switch (season) {
            case "summer":
            case "winter": totalPrice = budget - (budget * 0.10);
                place = "Hotel"; break;
        }


    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${totalPrice.toFixed(2)}`)
}
journey(['1500', "summer"])