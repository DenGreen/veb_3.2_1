import { Bowman } from "./bowman";
import { Undead } from "./undead";
import { Swordsman } from "./swordsman";
import { Daemon } from "./daemon";
import { Magician } from "./magician";
import { Zombie } from "./zombie";

let greid = new Magician("Greid", "Magician", 2, 100);
let dan = new Bowman("Dan", "Bowman");
let shadron = new Swordsman("Shadron", "Swordsman");
let doom = new Daemon("Doom", "Daemon", 5, 10);
let reiter = new Undead("Reiter", "Undead");
let trim = new Zombie("Trim", "Zombie")

dan.stoned = greid; // dan насылает "Дурман" на мага greid

console.log(dan);
console.log(greid);
console.log(reiter);