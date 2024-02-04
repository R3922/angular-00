import { Component} from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>counter: {{ counter }}</h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `,
  standalone: true
})

export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy( value: number ):void{
    this.counter += value;
  }

  resetCounter (){
    this.counter = 10;
  }
}
