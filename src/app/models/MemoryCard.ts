export class MemoryCard { 

    constructor(id : number, img : string) { 
        this._id = id;
        this._img = img;

    }

    private _id : number;
    private _img : string; 
    private _hasBeenFound : boolean = false; 
    private _hasBeenReturned : boolean = false;

    get id() {
        return this._id;
    }

    get img() {
        return this._img;
    }

    get hasBeenFound() {
        return this._hasBeenFound;
    }

    get hasBeenReturned() { 
        return this._hasBeenReturned;
    }

    set hasBeenFound(found : boolean) {
        this._hasBeenFound = found;
    }

    set hasBeenReturned(returned : boolean) {
        this._hasBeenReturned = returned;
    }
}