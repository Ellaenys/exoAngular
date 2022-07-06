import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Student';

@Component({
  selector: 'app-exo3',
  templateUrl: './exo3.component.html',
  styleUrls: ['./exo3.component.scss']
})
export class Exo3Component implements OnInit {

  constructor() { }

  public arrayStudent : Student [] = [];

  ngOnInit(): void {

    let antoine : Student = new Student('Antoine', 18, 'garçon'); 
    this.arrayStudent.push(antoine);

    let marie : Student = new Student('Marie', 12, 'fille'); 
    this.arrayStudent.push(marie);

    let marc : Student = new Student('Marc', 13, 'garçon'); 
    this.arrayStudent.push(marc);

    let andrea : Student = new Student('Andrea', 17, 'fille'); 
    this.arrayStudent.push(andrea);

    
  }

}
