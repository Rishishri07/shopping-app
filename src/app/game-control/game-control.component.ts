import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  countArray = [];
  count = 0;
  gameInterval: any;
  @Output() startGameEvent = new EventEmitter();
  constructor() { }

  startGame(): void {
    this.gameInterval = setInterval(this.startGameHandler.bind(this), 1000);
  }

  stopGame(): void {
    clearInterval(this.gameInterval);
  }
  startGameHandler(): void {
    this.countArray.push(this.count++);
    this.startGameEvent.emit(this.countArray);
  }

  ngOnInit(): void {  }

}
