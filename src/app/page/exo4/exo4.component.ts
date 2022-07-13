import { Component, OnInit } from '@angular/core';
import { MemoryCard } from 'src/app/models/MemoryCard';
import { MemoryConstructor } from 'src/app/models/MemoryConstructor';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss'], 
})
export class Exo4Component implements OnInit {

  constructor() { }

  public memoryConstructor : MemoryConstructor = new MemoryConstructor();
  public arrayMemoryCards : Array<MemoryCard> = [];
  public tempoArray : Array<MemoryCard> = [];

  ngOnInit(): void {
    this.arrayMemoryCards = this.memoryConstructor.createArrayOfCards();

  }

  search(card: MemoryCard) { 
    if (card.hasBeenReturned === true) {
      card.hasBeenReturned = false; 
    } else { 
      card.hasBeenReturned = true;
    }          
  }

  pairing(card: MemoryCard) { 
    this.tempoArray.push(card);

    if (this.tempoArray.length === 2) {

      if (this.tempoArray[0].id === this.tempoArray[1].id) {
        card.hasBeenFound = true;
        this.tempoArray = [];
        
      } else { 
        card.hasBeenFound = false;
        this.tempoArray = [];
      }

    } else {
      card.hasBeenReturned = false;
    }

  }

  
}
