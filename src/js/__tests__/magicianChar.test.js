import { Magician } from "../magician";

test("Magician set _attack должен выдовать 90", () => {
  let greid = new Magician("Greid", "Magician", 2, 100);

  const expected = 90;

  expect(greid.attack).toEqual(expected);
});

test("Magician set _attack должен выдовать ошибку если дистанция > 10", () => {
  function received() {
    new Magician("Greid", "Magician", 11, 100);
  }
  expect(received).toThrowError(new Error('Дистанция может быть только в диапазоне от 1 до 10'));
});

test("Magician set _attack должен выдовать ошибку если дистанция < 1", () => {
  function received() {
    new Magician("Greid", "Magician", 0, 100);
  }
  expect(received).toThrowError(new Error('Дистанция может быть только в диапазоне от 1 до 10'));
});