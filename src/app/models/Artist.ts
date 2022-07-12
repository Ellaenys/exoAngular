export class Artist { 

    constructor(
        private _name : string, 
        private _activedYear: number, 
        private _originedCountry: string
    ) { }

    get name(): string {
        return this._name;
      }
    
    set name(value: string) {
        this._name = value;
      }

    get activedYear(): number {
        return this._activedYear;
      }
    
    set activedYear(value: number) {
        this._activedYear = value;
      }

    get originedCountry(): String {
        return this._originedCountry;
      }
    
    set originedYear(value: string) {
        this._originedCountry = value;
      }

}
