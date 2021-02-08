import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getVal() { return " Rocks"; }

  view(votes: number) {
    console.log(votes);
  }

  buttonContent = "Click";
  inputValue = "Javascript";
  imgSrc = "https://picsum.photos/500/300";

  clicked = "";
  text = "Start typing..";
  handleClick(event) {
    console.log(event.type);
    this.clicked = "Clicked!";
  }
  handleInput(event) {
    this.text = event.target.value;

  }
  
  constructor() { }
  ngOnInit() {
  }
}
