const num1 =parseInt(prompt("Enter first Number: "))
const num2 = parseInt(prompt("Enter second Number: "))
const opr = prompt("Operator +,- , *,/ ")

let result;

if (opr == "+")
{
    result=(num1 + num2)
}else if(opr == "-"){
    result=(num1 - num2);
}else if(opr == "*"){
    result=(num1 * num2);
}
else if(opr == "/"){
    result=(num1 / num2);
}
{
alert(num1 + opr + num2 +'=' + result);
}