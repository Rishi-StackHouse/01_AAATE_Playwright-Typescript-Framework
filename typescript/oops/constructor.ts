class construct {
    private readonly env: string;
    protected readonly creatures: string[];
    height: number = 90;

    constructor(Env: string, Creatures: string[], Height?: number) {
        this.env = Env;
        this.creatures = Creatures;
        this.height = Height ?? this.height;   // || - fallback for all falsy values so intentional false wont workout, so ?? - fallback only on null or undefined
    }
    Details(): void {
        return console.log(`${this.creatures.join(', ')} lives in the ${this.env}`);
    }
    HeightOfCreatures(): number {
        console.log(`The height of the creatures is ${this.height}`);
        return this.height;
    }
}

let cons = new construct('Sky', [  'Falcon','Parrot','Crow'], 15);
cons.Details();
let depp = cons.HeightOfCreatures();
console.log(depp);


class childA extends construct {

    Details(): void {
        console.log('checking the safety of methods');
    }
}

let cuba = new childA('Jungle', ['Tiger', 'Elephant'], 120);
cuba.Details();
