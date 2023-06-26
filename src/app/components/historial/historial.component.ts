import { Component, OnInit } from '@angular/core';
import { Page } from 'src/app/interfaces/Page.interface';
import { PokeService } from 'src/app/services/poke.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit{
  
  histoy:Page[]=[]
  flag:boolean=false;
  constructor(
    private pokeSevice:PokeService
  ){}

  ngOnInit(): void {
    this.histoy=this.pokeSevice.getHistorial();
  }

  mostrar(page:Page){
    page.show=!page.show
  }


}
