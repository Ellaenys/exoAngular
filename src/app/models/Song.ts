import { Artist } from "./Artist";

export class Song { 

    constructor(name: string, duration: number, artist: Artist) { 
        this._name = name;
        this._duration = duration; 
        this._artist = artist;

    }

    private _name: string; 
    private _duration: number;
    private _artist: Artist;

    
    get name() : string {
        return this._name;
    }

    get duration() : number {
        return this._duration;
    }

    get artist() : Artist { 
        return this._artist;
    }

    getTime(): string {
        const sec: number = this.duration % 60;
        const min: number = Math.floor(this.duration / 60);
        const minStr: string = min < 10 ? '0'+min : min.toString();
        const secStr: string = sec < 10 ? '0'+sec : sec.toString();
        return minStr + ':' + secStr;
      }
    

}