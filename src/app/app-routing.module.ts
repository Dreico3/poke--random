import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistorialComponent } from './components/historial/historial.component';

const rutas: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'histor', component: HistorialComponent },
  { path: '', redirectTo: '/home', pathMatch: "full" },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
