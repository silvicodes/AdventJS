function countPackages(carriers, carrierID) {
  const carrier = carriers.filter((item) => item[0] === carrierID);
  return carrier[0][1] + ( carrier[0][2].reduce((acc, actual) => {
    return acc += countPackages(carriers,actual)
  },0)
  )
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

console.log(countPackages(carriers, 'dapelu')) // 9
