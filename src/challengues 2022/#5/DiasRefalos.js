function daysToXmas(date) {
  let aux = new Date(date);
  let fechaNavidad = new Date('Dec 25, 2021');
  let fechaNavidadMenosDate = fechaNavidad.getTime() - aux.getTime();
  let diasEnMS = 1000 * 60 * 60 * 24;
  return Math.ceil(fechaNavidadMenosDate / diasEnMS);
}

console.log(daysToXmas('Dec 1, 2021'));
console.log(daysToXmas('Dec 24, 2021 00:00:01'));
console.log(daysToXmas('Dec 24, 2021 23:59:59'));
console.log(daysToXmas("December 20, 2021 03:24:00"));
console.log(daysToXmas('Dec 25, 2021'));
console.log(daysToXmas('Dec 26, 2021'));
console.log(daysToXmas('Dec 31, 2021'));
console.log(daysToXmas('Jan 1, 2022 00:00:01'));
console.log(daysToXmas('Jan 1, 2022 23:59:59'));
