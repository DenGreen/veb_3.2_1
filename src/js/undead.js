import {Character} from './app'

export class Undead extends Character {
  constructor(name, type) {
    super(name, type)
    this.attack = 20;
    this.defence = 25;
  }
}