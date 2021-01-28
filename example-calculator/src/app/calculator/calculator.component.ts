import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {
  title: string = "Angular Calculator!!!";
  firtsValue: any;
  secondValue: any;
  count: number = 20;
  finalValue: number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.title);
  }

  type(value) {
    this.finalValue = value;
  }
  
}
