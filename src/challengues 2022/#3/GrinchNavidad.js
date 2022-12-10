function isValid(letter) {
  const open = [...letter].filter((letra) => letra === "(").length
  const close = [...letter].filter((letra) => letra === ")").length
  const vacio = letter.replace('()',"").trim();
  const llave = [...letter].filter((letra) => letra === "{").length
  const corchete = [...letter].filter((letra) => letra === "[").length

  if(
    (letter.length > vacio.length)
    || letter[0] === ")"
    || (open !== close)
    || (llave || corchete)){
    return false;
  }
  return true;
}
