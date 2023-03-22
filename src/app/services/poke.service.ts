import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, mergeMap, Observable, tap } from 'rxjs';
import { Page } from '../interfaces/Page.interface';
import { Pokemon } from '../interfaces/Pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  url:string='https://pokeapi.co/api/v2/pokemon/';
  urlAlet:string='https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20';
  constructor(
    private http:HttpClient
  ) { }

  getPagePokemon(page:number,link=this.url): Observable<Page> {
    console.log('atrapando pokemones ...');
    return this.http.get<Page>(`https://pokeapi.co/api/v2/pokemon/?offset=${page}0&limit=20`).pipe(
      mergeMap(pagina => {
        const pokemonObsArray = pagina.results.map(poke => this.http.get<Pokemon>(poke.url));

        return forkJoin(pokemonObsArray).pipe(

          map(pokemonArray => {
            return { ...pagina, data: pokemonArray };
          })
          
        );

      }),
      tap(ele => console.log('lo que trae la red ...', ele))
    );
  }
}
