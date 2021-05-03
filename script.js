
let result = 0;
let userInput = prompt("число");
userInput = Number(userInput);
let userSign = "sign";
while(userInput == Number(userInput)) {
    userSign = prompt("надо ввести + или - или * или /");
    if(userSign=="+"){
        result = userInput + Number(prompt(userInput));
    } else if(userSign == "-"){
        result = userInput - Number(prompt(userInput));
    } else if(userSign == "*"){
        result = userInput * Number(prompt(userInput));
    } else if(userSign == "/"){
        result = userInput * Number(prompt(userInput))
    } else if(userSign == "="){
    break;
    } else alert("корректно введите данные или знак");
}
document.write(result,"");



