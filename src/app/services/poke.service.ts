import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, Subject, tap, BehaviorSubject } from 'rxjs';
import { Page } from '../interfaces/Page.interface';
import { Pokemon } from '../interfaces/Pokemon.interface';

import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  
  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe:null|string = null;

  url: string = 'https://pokeapi.co/api/v2/pokemon/';
  urlAlet: string = 'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20';
  private listPoke = new BehaviorSubject<Page[]>([]);

  constructor(
    private http: HttpClient
  ) { }

  getPagePokemon(page: number, link = this.url): Observable<Page> {
    console.log('atrapando pokemones ...');
    return this.http.get<Page>(`https://pokeapi.co/api/v2/pokemon/?offset=${page}0&limit=10`).pipe(
      mergeMap(pagina => {
        const pokemonObsArray = pagina.results.map(poke => this.http.get<Pokemon>(poke.url));

        return forkJoin(pokemonObsArray).pipe(

          map(pokemonArray => {
            return { ...pagina, data: pokemonArray, moment:this.gethour(), numbrePage:page };
          })

        );

      }),
      tap(ele =>{
        let aux:Page[] = this.listPoke.getValue();
        aux.push(ele);
        this.listPoke.next(aux);
      })
    );
  }

  getHistorial():Page[]{
    return this.listPoke.getValue()
  }
  
  gethour():string|null{
    this.todayWithPipe = this.pipe.transform(Date.now(), 'd/M/yy, h:mm a');
    console.log(this.todayWithPipe);
    return this.todayWithPipe
  }
}
