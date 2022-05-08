function cinema(input) {

    let type = (input[0]);
    let rows = (input[1]);
    let columns = (input[2]);

    if (type == "Premiere") {
        console.log((rows * columns * 12.00).toFixed(2));
    }else if(type=="Normal"){
        console.log((rows*columns*7.50).toFixed(2));
    }else if (type=="Discount"){
        console.log((rows*columns*5.00).toFixed(2));
    }

}
cinema(["Premiere","10","12"])