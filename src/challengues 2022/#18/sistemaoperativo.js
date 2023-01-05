export default function fixFiles(files) {
const contador = {};
  return files.reduce((acc, actual) => {
    acc.push(
      acc.includes(actual) ? `${actual}(${contador[actual]})` : actual
    )
    contador[actual] = (contador[actual] ?? 0) + 1;
    return acc;
  }, []);

}


const files = ['photo', 'postcard', 'photo', 'photo', 'video']
console.log(fixFiles(files)) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']
