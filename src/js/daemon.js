import  {MagicianChar} from './magicianChar';

export class Daemon extends MagicianChar {
    constructor(name, type, distance, attack){
        super(name, type, distance, attack)
        this.defence = 40;
    }
}