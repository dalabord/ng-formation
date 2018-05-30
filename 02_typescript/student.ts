type Level = 0 | 1 | 2;
const Levels = ['Mauvais', 'Moyen', 'Bon'];

export class Student {
    name: string;
    age: number;
    private _level: Level;
    get level() {
        return this._level;
    }
        
    constructor(name: string, age?: number, level: Level = 1) {
        this.name = name;
        this.age = age;
        this._level = level;
    }

    info() {
        console.info(`Etudiant nommé ${this.name} agé de ${this.age} - Niveau ${Levels[this.level]} parmis ${this.levels()}.`);
    }

    levels() {
        return Levels
            .map(value => `'${value}'`)
            .reduce((prev, cur) => `${prev!== '' ? prev+', ' : prev}${cur}`, '');
    }
}