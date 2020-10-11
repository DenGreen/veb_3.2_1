import  {Character} from './app';

export class MagicianChar extends Character {
    constructor(name, type, distance, attack){
        super(name, type)
        this.distance = distance;
        this._attack = attack;
    }

    set _attack(value){
        let cutbackAttack = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];

        if(this.distance > 10 || this.distance < 1){
            throw Error('Дистанция может быть только в диапазоне от 1 до 10');
        } else {
            return this.attack = value * cutbackAttack[this.distance - 1];
        }
    }
    
}