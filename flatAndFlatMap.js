'use strict';

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(1));
console.log(arrDeep.flat(2));

const account1 = {
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
};

const account2 = {
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
};

const account3 = {
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
};

const account4 = {
  movements: [430, 1000, 700, 50, 90],
};

const accounts = [account1, account2, account3, account4];

console.log(accounts);

// flat
const overalBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);
