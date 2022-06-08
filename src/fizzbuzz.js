function fizzbuzz(lower, upper) {
  const result = []
  for (let i = lower; i <= upper; i++) {
    const isMultOf3 = i % 3 === 0
    const isMultOf5 = i % 5 === 0
    if (isMultOf3 && isMultOf5) {
      result.push('FizzBuzz')
    } else if (isMultOf3) {
      result.push('Fizz')
    } else if (isMultOf5) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result
}

module.exports = fizzbuzz
