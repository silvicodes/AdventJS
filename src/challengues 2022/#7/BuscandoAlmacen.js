function iterate(obj) {
  let res = [];
  for (let property in obj) {
    const child = obj[property];
    if (typeof child === 'object') {
      res = [...res, ...iterate(child)]
    }
    res.push(child);
  }
  return res;
}

function contains(store, product) {
  return iterate(store).some((item) => item === product)
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(almacen, 'camiseta'));
console.log(contains(otroAlmacen, 'gameboy'));
