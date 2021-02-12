function createCounter() {
  let counter = 0
  const myFunction = function() {
      counter = counter + 1
      return counter
  }
  return myFunction
  console.log(counter)
}
const increment = createCounter() 
const c1 = createCounter()()
const c2 = createCounter()()
const c3 = createCounter()()

console.log(c1, c2, c3)