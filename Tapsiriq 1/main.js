function calculate() {
    let firstNumber = parseFloat(document.getElementById("firstNumber").value);
    let operator = document.getElementById("operator").value;
    let secondNumber = parseFloat(document.getElementById("secondNumber").value);
    let result;
  
    switch(operator) {
      case "+":
        result = firstNumber + secondNumber;
        break;
      case "-":
        result = firstNumber - secondNumber;
        break;
      case "*":
        result = firstNumber * secondNumber;
        break;
      case "/":
        result = firstNumber / secondNumber;
        break;
      default:
        result = "Düzgün Operator Daxil Edin !";
    }
  
    document.getElementById("result").innerHTML = "Cavab: " + result;
  }