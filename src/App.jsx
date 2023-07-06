// TODO
// Install Extensions

function App() {
  // Location to write JavaScript Code

  // 1. How to create variable
  // Data Type => String
  const myCountry = 'Nepal'
  // myCountry = 'India'

  // Data Type => Number
  let age = 30
  age = 31

  let randomNumber
  randomNumber = 55
  // const number = 100

  function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
  }
  const result = add(40, 40)
  const output = add(100, 400)

  // Data Type => Array
  const numbers = [10, 20, 30, 40]

  // DONOT REPEAT YOURSELF (DRY)
  // const firstNumber = numbers[0]
  // const secondNumber = numbers[1]

  // Array Destructuring
  const [, firstNumber, secondNumber] = numbers

  // Data Type => Object
  const numbersObject = {
    numberFour: 40,
    numberThree: 30,
    numberTwo: 20,
    numberOne: 10,
  }

  const { numberOne: myNumber } = numbersObject

  // Interpolation
  return (
    <>
      <div>First Number: {firstNumber}</div>
      <div>Second Number: {secondNumber}</div>
      <div>First number of object: {myNumber}</div>
    </>
  )
}

export default App
