import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'myCalculator';
  firstOperand = ""
  secondOperand = ""
  errorMessage = ""
  displayValue = ""
  operations = ['+', '-','*','/']
  operator: string;
  constructor() {
    this.operator = ""
}
clear(){
  if(this.secondOperand != "")
  {
    this.secondOperand = this.secondOperand.slice(0, -1);
  }
  else if(this.operator)
  {
    this.operator = this.operator.slice(0, -1);
  }
  else{
    this.firstOperand = this.firstOperand.slice(0, -1);
  }
  this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
}
calculate() {
  console.log('Calculate() triggered')
  if (this.operator != "") {
    let first = parseFloat(this.firstOperand)
    let second = parseFloat(this.secondOperand)
    switch (this.operator) {
      case '+':
        this.displayValue = `${this.displayValue}=${first + second}`
        this.clearEverything()
        break;
      case '-':
        this.displayValue = `${this.displayValue}=${first - second}`
        this.clearEverything()
        break;
      case '*':
        this.displayValue = `${this.displayValue}=${first * second}`
        this.clearEverything()
        break;
      case '/':
        this.displayValue = `${this.displayValue}=${first / second}`
        this.clearEverything()
        break;
      default:
        break;
    }
  } else {
    this.errorMessage = "Please Add Operator"
  }
}

addPoint(){
  if(this.secondOperand!="")
  {
    this.secondOperand=`${this.secondOperand}${'.'}`
  }
  else{
    this.firstOperand=`${this.firstOperand}${'.'}`
  }
  this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
}
addNumber(value: number) {
  this.errorMessage = ""
  if (this.operator != "") {
    this.secondOperand += value
    this.displayValue = `${this.firstOperand}${this.operator}${this.secondOperand}`
  } else {
    this.firstOperand += value
    this.displayValue = this.firstOperand
  }
  console.log('first', this.firstOperand)
  console.log('second', this.secondOperand)
}
addOperator(operator: string) {
  if (this.operator != "") {
    this.displayValue = `${this.displayValue.substring(0, this.displayValue.length - 1)}${operator}`
  } else {
    this.displayValue = `${this.displayValue}${operator}`
  }
  this.operator = operator

}

clearEverything() {
  this.firstOperand = ""
  this.secondOperand = ""
  this.operator = ""
}
}
