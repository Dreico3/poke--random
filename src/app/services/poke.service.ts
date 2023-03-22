import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, tap } from 'rxjs';
import { Page } from '../interfaces/Page.interface';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  url:string='https://pokeapi.co/api/v2/pokemon/'
  constructor(
    private http:HttpClient
  ) { }

  getPagePokemon(link=this.url): Observable<Page> {
    console.log('traer pokemones con la pagina incluida 2');
    return this.http.get<Page>(link).pipe(
      mergeMap(pagina => {
        const pokemonObsArray = pagina.results.map(poke => this.http.get<Pokemon>(poke.url));

        return forkJoin(pokemonObsArray).pipe(

          map(pokemonArray => {
            return { ...pagina, data: pokemonArray };
          })
          
        );

      }),
      tap(ele => console.log('esto regresa el service', ele))
    );
  }
}
