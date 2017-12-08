import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heros';

@Injectable()
export class HeroService {

  constructor() { }

  getHeros(): Hero[]{
    return HEROES;
  }
}