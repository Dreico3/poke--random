import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
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
  constructor(
    private pokeService:PokeService
  ){}
  ngOnInit(): void {
    this.pokeService.getPagePokemon().subscribe(data=>this.listaPokemon=data.data);
  }

  mostrar(){
    
    console.log('mostramos los pokemones')
    
  }
}
