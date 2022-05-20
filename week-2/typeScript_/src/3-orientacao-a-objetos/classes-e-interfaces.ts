class Users {
    public name;
    public age;
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Playes extends Users {
    public game;
    constructor(name:string, age: number, game: string) {
    super(name, age);
    this.game = game
    }    
    // estaticMethod
    statusCourrenceGame () {
    return `In this moment I playng ${this.game}`;
    }    
}

const jogador = new Playes ('gabriel', 25, 'AOV');
console.log(jogador.statusCourrenceGame())