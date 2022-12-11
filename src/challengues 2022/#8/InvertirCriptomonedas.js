const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
const pricesDoge = [18, 15, 12, 11, 9, 7]
//maxProfit(pricesDoge) = // -> -1 (no hay ganancia posible)
const pricesAda = [3, 3, 3, 3, 3]
//maxProfit(pricesAda) = // -> -1 (no hay ganancia posible)

function maxProfit(prices) {
  let arrCompra = prices.slice(0, 2);
  let valorCompra = Math.min(...arrCompra);
  let arrVenta = prices.slice(2,prices.length);
  let valorVenta = Math.max(...arrVenta)
  if(valorVenta <= valorCompra) return -1
  return [valorCompra,valorVenta].reduceRight((acc,current) => acc-current)
}

console.log(maxProfit(pricesBtc))
console.log(maxProfit(pricesEth))
console.log(maxProfit(pricesDoge))
console.log(maxProfit(pricesAda))
