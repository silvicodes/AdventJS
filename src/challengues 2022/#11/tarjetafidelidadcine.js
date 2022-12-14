export default function shouldBuyFidelity(times) {
  const COSTO_BOLETO_UNITARIO = 12;
  let COSTO_TARJETA = 250;
  const DESCUENTO = 0.75;
  let costoConBoleto = times * COSTO_BOLETO_UNITARIO; 
  let auxCosto = 0;
  let arr = [COSTO_TARJETA];
  for(let i = 1; i<=times; i++){
    auxCosto =((DESCUENTO ** i) * COSTO_BOLETO_UNITARIO)
    arr.push(auxCosto)
  }
  const costoConTargeta = arr.reduce((acc,item) => acc+item,0);
  return costoConTargeta < costoConBoleto ? true : false
}
