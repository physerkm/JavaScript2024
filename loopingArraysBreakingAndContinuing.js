const erkam = [
  'Erkam',
  2024 - 1994,
  'physicist',
  ['Sefer', 'Abdullah', 'Umut'],
  false,
];
const types = [];

for (let i = 0; i < erkam.length; i++) {
  // Reading from erkam array
  console.log(erkam[i], typeof erkam[i]);

  // Filling types array
  // types[i] = typeof erkam[i];
  types.push(typeof erkam[i]);
}

console.log(types);

const years = [1961, 1970, 1990, 1993, 1994, 1996, 2004, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < erkam.length; i++) {
  if (typeof erkam[i] !== 'string') continue;

  console.log(erkam[i], typeof erkam[i]);
}

console.log('--- BREAK ---');
for (let i = 0; i < erkam.length; i++) {
  if (typeof erkam[i] !== 'string') continue;

  console.log(erkam[i], typeof erkam[i]);
}
