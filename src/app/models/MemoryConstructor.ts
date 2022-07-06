import { MemoryCard } from "./MemoryCard";

export class MemoryConstructor {

    constructor() { 

    }

    createArrayOfCards() : Array<MemoryCard> {
        let arrayMemory : Array<MemoryCard> = [];

        let un : MemoryCard = new MemoryCard(1, './assets/img/1.png');
        let deux : MemoryCard = new MemoryCard(2, './assets/img/2.png');
        let trois : MemoryCard = new MemoryCard(3, './assets/img/3.png');
        let quatre : MemoryCard = new MemoryCard(4, './assets/img/4.png');
        let cinq : MemoryCard = new MemoryCard(5, './assets/img/5.png');
        let six : MemoryCard = new MemoryCard(6, './assets/img/6.png');
        let sept : MemoryCard = new MemoryCard(1, './assets/img/1.png');
        let huit : MemoryCard = new MemoryCard(2, './assets/img/2.png');
        let neuf : MemoryCard = new MemoryCard(3, './assets/img/3.png');
        let dix : MemoryCard = new MemoryCard(4, './assets/img/4.png');
        let onze : MemoryCard = new MemoryCard(5, './assets/img/5.png');
        let douze : MemoryCard = new MemoryCard(6, './assets/img/6.png');

        arrayMemory.push(un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze);
        
        let arrayMemoryShuffled = arrayMemory
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        return arrayMemoryShuffled;

    }
    

}