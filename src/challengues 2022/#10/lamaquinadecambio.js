export default function getCoins(change) {
   return [1, 2, 5, 10, 20, 50].reduceRight((acc, coinValue) => [~~(change / coinValue), ...acc, ...void (change %= coinValue) || []], []);
   function groupBy(collection, it){
  return collection.reduce((obj, item) => {
    let index = (typeof it === "function") ? it(item) : item[it];
    return {
      ...obj,
      [index]: [...(obj[index] || []), item]
    }
  },{})
}
}
