const calcularRegalos = (packOfGifts) => Array.from(...packOfGifts.join('').split(',')).length

const calcularRenos = (reindeers) => reindeers.map((reindeer) => reindeer.length * 2).reduce((acc, current) => acc + current,0)

function distributeGifts(packOfGifts, reindeers) {
  return Math.trunc(calcularRenos(reindeers) / calcularRegalos(packOfGifts))
}

const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

console.log(distributeGifts(packOfGifts, reindeers)) // 2
