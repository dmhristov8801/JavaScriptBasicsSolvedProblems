function fruitOrvegetable(input){

let element =(input[0]);

if (element=="banana"||element=="apple"||element=="kiwi"||element=="cherry"||element=="lemon"||element=="grapes"){
    console.log("fruit")

}else if (element=="tomato"||element=="pepper"||element=="cucumber"||element=="carrot"){
    console.log("vegetable")
}else {
    console.log("unknown")
}

}
fruitOrvegetable(["water"])