import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/Artist';
import { Playlist } from 'src/app/models/Playlist';
import { Song } from 'src/app/models/Song';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-exo5',
  templateUrl: './exo5.component.html',
  styleUrls: ['./exo5.component.scss']
})
export class Exo5Component implements OnInit {

  constructor() {


  //   let birthDateGeraldine: Date = new Date();
  //   birthDateGeraldine.setFullYear(2000);

  //   let geraldine: User = new User('bidule@gmail.com','machine', birthDateGeraldine);
  //   geraldine.firstName = 'Super Geraldine';
  //   console.log(geraldine.firstName);

  //   const nianCat : Artist = new Artist('nian cat', 2000, 'Paris'); 
  //   console.log(nianCat);

  //   const song : Song = new Song('Chevauche la lumière', 528, nianCat);
  //   console.log(song);

  //  const playGeraldine : Playlist = new Playlist('Gnagnagna', geraldine, true); 
  //  playGeraldine.addSong(song);
  //  console.log(playGeraldine);

   let birthDateMoi: Date = new Date();
   birthDateMoi.setFullYear(1985);

   let moi: User = new User('moi@gmail.com','machine', birthDateMoi);

   const chevelle : Artist = new Artist('Chevelle', 2002, 'USA'); 

   const red : Song = new Song('The red', 350, chevelle);
   const familySystem : Song = new Song('Family System', 370, chevelle);
   const closure : Song = new Song('Closure', 320, chevelle);
   const comfortableLiar : Song = new Song('Comfortable Liar', 342, chevelle);
   const forfeit : Song = new Song('Forfeit', 320, chevelle);

   const playChevelle : Playlist = new Playlist('Wonder what\'s next', moi, true);
   playChevelle.addSong(red);
   playChevelle.addSong(familySystem);
   playChevelle.addSong(closure);
   playChevelle.addSong(comfortableLiar);
   playChevelle.addSong(forfeit);

   console.log(playChevelle);
   }

  ngOnInit(): void {

  }

}
