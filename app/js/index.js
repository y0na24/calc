import './calc.js'
import { calculateAverage } from './calc.js'

const button = document.querySelector('#calc-btn')

button.addEventListener('click', () => {
  calculateAverage()
})
