export default function contarOvejas(ovejas) {
 return ovejas.filter((oveja) => {
    const regexA = /a/i;
    const regexN = /n/i;
    let resultA = regexA.test(oveja.name);
    let resultN = regexN.test(oveja.name);
    return oveja.color ==="rojo" && resultA && resultN
  })
}
