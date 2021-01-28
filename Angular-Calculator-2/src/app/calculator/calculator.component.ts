import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  title: string = "Angular Calculator!!!";
  firstValue: any; // 1st operand
  secondValue: any; // 2nd operand
  isDecimalPointPressed: any;
  operator: any; // operation
  lcdValue: any; // lcd display
  maxChars: number = 4;

  constructor() { 
    console.log(this.title);
    this.clear();
    console.log(this.operator);

  }

  ngOnInit() {
    
  }

  getNumber(value) {
    if(this.operator == null) {
      if(this.firstValue == 0) { // clean slate, first time
        this.firstValue = value;
        //console.log(this.firstValue);
      } else {
        this.firstValue =  this.firstValue + this.validateDecimalPoint() + value;
        console.log(this.firstValue);
      }
      this.lcdValue = this.firstValue;
    } else {
      if(this.secondValue == 0) {
        this.secondValue = value;
        console.log(this.secondValue);
      } else {
        this.secondValue =  this.secondValue + this.validateDecimalPoint() + value;
        console.log(this.secondValue);
      }
      this.lcdValue = this.secondValue;
    }
  }

  getOperator(value) {
    this.operator = value;
    console.log(this.operator);
  }

  getDecimalPoint(value) {
    this.isDecimalPointPressed = true;
    // console.log('1. = '    + Number('1.'));
    // console.log('10. = '    + Number('10.'));
    // console.log('.1   = '  + Number('.1'));
    // console.log('.    = '  + Number('.'));
    // console.log('..   = '  + Number('..'));
    // console.log('..1  = '  + Number('..1'));
  }

  validateDecimalPoint() {
    if(this.isDecimalPointPressed) {
      this.isDecimalPointPressed = false;
      return('.');
    }
    return('');
  }

  calculate() {
    switch(this.operator) {
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
