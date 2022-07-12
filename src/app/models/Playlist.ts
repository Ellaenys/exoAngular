import { Song } from "./Song";
import { User } from "./User";

export class Playlist { 

    private _name: string; 
    private _songs: Array<Song> = new Array<Song>();
    private _user: User; 
    private _createdAt: Date = new Date();
    private _updatedAt: Date = new Date();
    private _visibility: boolean = false;

    constructor(name:string, user: User, visibility: boolean) { 
        this._name = name; 
        this._user = user;
        this._visibility = visibility;

    }

    get name(): string {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
        this._updatedAt = new Date();
    }

    get songs(): Array<Song> {
        return this._songs;
    }

    get user(): User {
        return this._user;
    }

    set user(user: User) {
        this._user = user;
    }

    get createdAt(): Date {
        return this._createdAt;
    }

    set createdAt(create: Date) {
        this._createdAt = create;
    }

    get updatedAt(): Date {
        return this._updatedAt;
    }

    set updated(update: Date) {
        this._updatedAt = update;
    }

    get visibility(): boolean {
        return this._visibility;
    }

    set visibility(value: boolean) {
        this._visibility = value;
        this._updatedAt = new Date();
    }

    // addSong(id: number, song: Song) {
    //     this._songs.set(id, song);
    // }

    addSong(song: Song) : boolean { 
        if (!this._songs.includes(song)) { 
            this._songs.push(song);
            this._updatedAt = new Date();
        }

        return false;
    }

    deleteSong(index: number) : void { 
 
        this._songs = this._songs.filter(
            (song, indexTmpSong) => index !== indexTmpSong
          );

            this._updatedAt = new Date();
        

        console.log(this.songs)
    }


    getTotalTime() { 
        let total : number = 0;

        for (const song of this.songs) {

            total += song.duration;
            
        }
        
        if (total === 0) return '00:00';

        const sec: number = total % 60;
        const min: number = Math.floor(total / 60);
        const minStr: string = min < 10 ? '0' + min : min.toString();
        const secStr: string = sec < 10 ? '0' + sec : sec.toString();
        return minStr + ':' + secStr;
    }




}