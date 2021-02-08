import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title: string = "Angular Calculator";
  firstValue: any;
  secondValue: any;
  operator: any;
  maxChars: number = 4;
  lcdValue: any;
  isDecimalPointPressed: any;

  constructor() {
    this.clear();
  }

  ngOnInit(): void {
  }

  getNumber(value) {
    if (this.operator == null) {
      if (this.firstValue == 0) {
        this.firstValue = value;
      } else {
        this.firstValue = this.firstValue + this.validateDecimalPoint() + value;
      }
      this.lcdValue = this.firstValue;
    } else {
      if (this.secondValue == 0) {
        this.secondValue = value;
      } else {
        this.secondValue = this.secondValue + this.validateDecimalPoint() + value;
      }
      this.lcdValue = this.secondValue;
    }

  }

  getOperator(value) {
    this.operator = value;
  }

  calculate() {
    switch (this.operator) {
      case '+':
        this.lcdValue = Number(this.firstValue) + Number(this.secondValue);
        break;
      case '-':
        this.lcdValue = Number(this.firstValue) - Number(this.secondValue);
        break;
      case '*':
        this.lcdValue = Number(this.firstValue) * Number(this.secondValue);
        break;
      case '/':
        this.lcdValue = Number(this.firstValue) / Number(this.secondValue);
        break;
    }
  }
  getDecimalPoint(value) {
    this.isDecimalPointPressed = true;
  }

  validateDecimalPoint() {
    if (this.isDecimalPointPressed) {
      this.isDecimalPointPressed = false;
      return ('.');
    }
    return ('');
  }

  type(value) {
    this.lcdValue /= value;
  }

  clear() {
    this.firstValue = 0;
    this.secondValue = 0;
    this.isDecimalPointPressed = false;
    this.operator = null;
    this.lcdValue = 0;
  }

}