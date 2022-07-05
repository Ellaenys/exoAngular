import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _toto: string = ' bonjour ';

  constructor() { }

  public get toto() : string { 
    return this._toto;
  }

  ngOnInit(): void {

    setTimeout(() => {
      this._toto = " Aurevoir !! "
    }, 5000);

    let game: Game = new Game('Machin truc');
  }


}
