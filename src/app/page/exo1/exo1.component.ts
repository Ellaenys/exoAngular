import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  constructor() { 
    
  }

  public total: number = 0;

  compteur(number: number): void { 
  this.total += number;
}

  reset(): void { 
  this.total = 0;
}

  ngOnInit(): void {

  }

}
