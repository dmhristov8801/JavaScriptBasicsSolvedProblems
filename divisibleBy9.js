function divisivleBy9(input) {

    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let sum = 0;
    let outputNumbers = '';
    for (i = number1; i < number2; i++) {
        if (i % 9 == 0) {
            sum += i;

        }
    }
    console.log(`The sum: ${sum}`)
    
    for (i = number1; i <= number2; i++) {
        if (i % 9 == 0) {
            console.log(i)
        }
    }
}


divisivleBy9(['100', '200'])