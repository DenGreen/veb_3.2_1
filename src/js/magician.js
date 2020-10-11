import  {MagicianChar} from './magicianChar';

export class Magician extends MagicianChar {
    constructor(name, type, distance, attack){
        super(name, type, distance, attack)
        this.defence = 40;
    }
}