import { Component, OnInit } from '@angular/core';
import { MemoryCard } from 'src/app/models/MemoryCard';
import { MemoryConstructor } from 'src/app/models/MemoryConstructor';

@Component({
  selector: 'app-exo4',
  templateUrl: './exo4.component.html',
  styleUrls: ['./exo4.component.scss']
})
export class Exo4Component implements OnInit {

  constructor() { }

  public memoryConstructor : MemoryConstructor = new MemoryConstructor();
  public arrayMemoryCards : Array<MemoryCard> = [];

  ngOnInit(): void {
    this.arrayMemoryCards = this.memoryConstructor.createArrayOfCards();


  }


}
