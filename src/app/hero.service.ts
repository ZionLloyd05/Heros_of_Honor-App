import { MessageService } from './message.service';
import { HEROES } from './mock-heros';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    
    //TODO: Send the message _after_ fetching the heros
    this.messageService.add('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }

  getHero(id: number): Observable<Hero>{

    this.messageService.add(`HeroService: fetched hero with id = ${id}`);
    return Observable.of(HEROES.find(hero => hero.id === id));
  }

}
