import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {

  constructor() {
  }
    

  private _games: Array<string> = [
    'Elden Ring', 
    'Zelda',
    'Mario',
    'Sonic'
  ]

  public get games() : Array<string> {
    return this._games;
  }

  private _panier: Array<string> = []

  public get panier() : Array<string> {
    return this._panier;
  }

  ajouter(game: string) : void { 

     this.panier.push(game);

    }

  supprimer(p: string) : void { 
    let pp = this.panier.indexOf(p);
    this.panier.splice(pp, 1);
  }

  ngOnInit(): void {

    
  }

}
