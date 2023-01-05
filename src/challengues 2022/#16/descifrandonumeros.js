export default function decodeNumber(symbols) {
  const values = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };
  let respuesta = 0;
  [...symbols].forEach((_, index) => {
    if (values[symbols[index]] < values[symbols[index + 1]]) {
      //console.log("if", symbols[index])
      respuesta -= values[symbols[index]]
      //console.log("if res", respuesta)
    } else {
      //console.log("else",symbols[index])
      respuesta += values[symbols[index]]
      //console.log("else res", respuesta)
    }
  })
  return respuesta;
}
