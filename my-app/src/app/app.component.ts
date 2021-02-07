import { Component } from '@angular/core';
import { MainService } from './services/main.service'; // Import our Service here

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!!!';
  subtitle = "Interpolation Tricks";
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
  active = true;
  age = 10;
  isAdult() { return this.age > 17; }
  plays = ["Hamlet", "Othello", "Coriolanus"];

  data: any = [];
  constructor(private mainService: MainService) { }
  ngOnInit() {
    this.mainService.getData().subscribe(data => {       
      this.data = data[1];
    });
  }
}
