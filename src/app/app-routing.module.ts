import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './page/exo1/exo1.component';
import { Exo2Component } from './page/exo2/exo2.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'exo1', component : Exo1Component },
  { path: 'exo2', component : Exo2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
