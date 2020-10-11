import { Bowman } from "../bowman";
import { Magician } from "../magician";
import { Undead } from "../undead";


test("Bowman при передаче верных параметров", () => {
  const expected = {
    name: "Reiter",
    health: 100,
    level: 1,
    type: "Bowman",
    attack: 25,
    defence: 25,
  };
  const received = new Bowman("Reiter", "Bowman");
  expect(received).toEqual(expected);
});

test("Bowman set _type(value) передача не верного type", () => {
  function received() {
    new Bowman("Reiter", "");
  }
  expect(received).toThrowError(new Error("Передан не существующий тип"));
});

test("Bowman set _name(value) передача не верного name", () => {
  function received() {
    new Bowman("R", "Bowman");
  }
  expect(received).toThrowError(
    new Error("Имя должно содержать от 2 до 10 символов")
  );
});

test("Bowman levelUp() при health > 0", () => {
  const expected = {
    name: "Reiter",
    health: 100,
    level: 2,
    type: "Bowman",
    attack: 30,
    defence: 30,
  };
  const received = new Bowman("Reiter", "Bowman");
  received.levelUp();
  expect(received).toEqual(expected);
});

test("Bowman levelUp() при health = 0", () => {
  function received() {
    const received = new Bowman("Reiter", "Bowman");
    received.health = 0;
    received.levelUp();
  }
  expect(received).toThrowError(new Error("Нельзя повысить лвл умершего"));
});

test("Bowman damage() при health > 0", () => {
  const expected = 77.5;
  const received = new Bowman("Reiter", "Bowman");
  received.damage(30);
  expect(received.health).toEqual(expected);
});

test("Bowman damage() при health = 0", () => {
  function received() {
    const received = new Bowman("Reiter", "Bowman");
    received.health = 0;
    received.damage(30);
  }
  expect(received).toThrowError(new Error("Персонаж уже мертв"));
});

test("Bowman метод stoned на Magician", () => {
  let greid = new Magician("Greid", "Magician", 2, 100);
  let dan = new Bowman("Dan", "Bowman");

  const expected = 85;
  dan.stoned = greid;

  expect(greid.attack).toEqual(expected);
});

test("Bowman метод stoned на Undead", () => {
  let reiter = new Undead("Reiter", "Undead");
  let dan = new Bowman("Dan", "Bowman");

  function received() {
    dan.stoned = reiter;
  }
  expect(received).toThrowError(new Error(`Нельзя применить данную способность к классу Undead`));
});