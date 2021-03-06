import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {Playlist} from "../../models/Playlist";

@Component({
  selector: 'app-spotifish-user',
  templateUrl: './spotifish-user.component.html',
  styleUrls: ['./spotifish-user.component.scss']
})
export class SpotifishUserComponent implements OnInit {

  constructor() { }

  private _user: User = new User('toto@gmail.com', 'ZuPeRToTo', new Date());
  private _arrayPlaylistsUser: Playlist[] = [
    new Playlist('Rap US', this._user, true),
    new Playlist('Métal', this._user, true),
    new Playlist('Rock / hard-rock', this._user, false),
    new Playlist('Rock 80', this._user, true),
  ];

  get user(): User {
    return this._user;
  }

  get arrayPlaylistsUser(): Playlist[] {
    return this._arrayPlaylistsUser;
  }

  ngOnInit(): void {
  }

}
