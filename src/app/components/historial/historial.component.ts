import { Component, OnInit } from '@angular/core';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit{
  
  

  constructor(
    private pokeSevice:PokeService
  ){}

  ngOnInit(): void {
    console.log('como estas bb empesemos')
  }

  mostrar(){
    console.log(this.pokeSevice.gethour())
  }


}
