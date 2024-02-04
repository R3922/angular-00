import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'] // Corregido aquí
})
export class HeroComponent {
  originalName: string = 'Ironman';
  originalAge: number = 45;
  name: string = this.originalName;
  age: number = this.originalAge;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.age}`;
  }

  changeHero(): void {
        if (this.name === 'Spiderman') {
      this.name = this.originalName;
    } else {
      this.name = 'Spiderman';
    }
  }

  changeAge(): void {
    if (this.age === 25) {
      this.age = this.originalAge;
    } else {
      this.age = 25;
    }
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 25;

    // document.querySelector('h1')!.innerHTML = '<h1>Desde ZERO RVM</h1>'
    // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde ZERO RVM</h1>';
  }//)



}

