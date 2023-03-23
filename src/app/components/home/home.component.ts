import { Component, OnInit } from '@angular/core';
import { EMPTY, interval, Observable } from 'rxjs';
import { Page } from 'src/app/interfaces/Page.interface';
import { Pokemon } from 'src/app/interfaces/Pokemon.interface';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  page$:Observable<Page>=EMPTY;
  listaPokemon:Pokemon[]=[];
  infi=interval(10000);
  constructor(
    private pokeService:PokeService
  ){}
  ngOnInit(): void {
    this.infi.subscribe(
      n=>{
        this.pokeService.getPagePokemon(this.getRandomInt()).subscribe(data=>this.listaPokemon=data.data);
      }
    )
  }

  mostrar(){
    
    console.log('mostramos los pokemones')
    console.log(this.pokeService.getHistorial());
  }

  getRandomInt(min:number=1, max:number=11):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
}
