import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
//import { HEROES } from '../mock-heros';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heros: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heros = this.heroService.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //alert(this.selectedHero.name);
  }
}
