import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './page/exo1/exo1.component';
import { Exo2Component } from './page/exo2/exo2.component';
import { Exo3Component } from './page/exo3/exo3.component';
import { Exo4Component } from './page/exo4/exo4.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'exo1', component : Exo1Component },
  { path: 'exo2', component : Exo2Component }, 
  { path: 'exo3', component : Exo3Component },
  { path: 'exo4', component : Exo4Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
