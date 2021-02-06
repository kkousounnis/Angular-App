import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!!!';
  subtitle = "Interpolation Tricks";
  getVal(){ return " Rocks"; } 

  view(votes: number) {
    console.log(votes);
  }

  buttonContent = "Click";
  inputValue = "Javascript";
  imgSrc = "https://picsum.photos/500/300";
}
