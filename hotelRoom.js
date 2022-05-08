function hotelRoom(input) {

    let month = (input[0]);
    let nightsCount = Number(input[1]);
    let totalAmountStudio = 0;
    let totalAmountApartment = 0;
    if (month == "May" || month == "October") {
        if (nightsCount > 7 && nightsCount <= 14) {
            totalAmountStudio = (nightsCount * 50) * 0.95;
            totalAmountApartment = nightsCount * 65;
        } else if (nightsCount > 14) {
            totalAmountStudio = (nightsCount * 50) * 0.70;
            totalAmountApartment = (nightsCount * 65) * 0.90;
        } else {
            totalAmountStudio = nightsCount * 50;
            totalAmountApartment = nightsCount * 65;
        }
    } else if (month == "June" || month == "September") {
        if (nightsCount > 14) {
            totalAmountStudio = (nightsCount * 75.20) * 0.80;
            totalAmountApartment = (nightsCount * 68.70) * 0.90;
        } else {
            totalAmountStudio = nightsCount * 75.20;
            totalAmountApartment = nightsCount * 68.70;
        }
    } else if (month == "July" || month == "August") {
        if (nightsCount > 14) {
            totalAmountApartment = (nightsCount * 77) * 0.90;
            totalAmountStudio = nightsCount * 76;
        } else {
            totalAmountApartment = nightsCount * 77;
            totalAmountStudio = nightsCount * 76;
        }
    }
    console.log(`Apartment: ${totalAmountApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalAmountStudio.toFixed(2)} lv.`)
    
}

hotelRoom(['June','14'])