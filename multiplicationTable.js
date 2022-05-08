function multiplicationTable(input){

let num = Number(input[0]);
let num1=1;
let num2=10;
let result=0;
for (i=num1;i<=num2;i++){
    result=i+=num;
    console.log(result)
}


}
multiplicationTable([5])