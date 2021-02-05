import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  title: string;

  @Input('referrals')
  count: number = 0;

  @Output() increment = new EventEmitter<number>();
  votes: number = 0;
  upvote() { this.increment.emit(this.votes++); }

}
