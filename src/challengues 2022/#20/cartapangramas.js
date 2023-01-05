export default function pangram(letter) {
  return new Set(letter.match(/[a-zñáéíóúü]/gi)).size >= 27;
}
