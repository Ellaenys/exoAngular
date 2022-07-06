export class Student { 

    constructor(name: string, age : number, gender: string) {
        this._name = name;
        this._age = age; 
        this._gender = gender; 

    }

    private _name : string;
    private _age : number;
    private _gender : string; 
    private _activities : Array<string> = [
        'Badmington', 
        'Course à pied', 
        'Volley', 
        'Football'
    ]

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    get activities() {
        return this._activities;
    }


}