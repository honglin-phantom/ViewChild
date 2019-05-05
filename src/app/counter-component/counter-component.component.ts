import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter-component.component.html',
  styleUrls: ['./counter-component.component.css']
})
export class CounterComponent {
  /* 定义实例变量  */
  counter = 2;

  addOne() {
    this.counter++;
  }

  minusOne() {
    this.counter--;
  }
}
