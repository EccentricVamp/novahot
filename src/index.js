import { ID_MAIN, main } from 'components/main.js'
import { roll } from 'redroll'

const ID_LOG = 'log'
const MIN_BUTTONS = 1
const MAX_BUTTONS = 30

/**
 * @param {number} dice Number of dice to roll
 */
function onClick(dice) {
    const result = roll(`${dice}d6`)
    const log = document.getElementById(ID_LOG)
    const row = document.createElement('p')
    let hits = 0
    let ones = 0
    for (const roll of result.rolls) {
        const span = document.createElement('span')
        const comma = document.createTextNode(', ')
        span.textContent = roll

        if (roll >= 5) {
            span.className = 'text-sky-500'
            hits++
        } else if (roll <= 1) {
            span.className = 'text-red-500'
            ones++
        }

        row.appendChild(span)
        row.appendChild(comma)
    }

    if (result.rolls.length > 0) {
        row.removeChild(row.lastChild)
    }

    const halfPool = result.rolls.length / 2
    const outcome = document.createTextNode(' = ' + hits)
    row.appendChild(outcome)
    
    if (ones >= halfPool) {
        const glitch = document.createElement('span')
        glitch.className = 'text-red-500'
        glitch.textContent = ' glitch'
        row.appendChild(glitch)

        if (hits == 0) glitch.textContent += ' critical'
    }
    
    log.appendChild(row)
}

main(document.getElementById(ID_MAIN))
const buttons = document.getElementById('buttons')

const numbers = Array.from(new Array(MAX_BUTTONS), (_, i) => i + MIN_BUTTONS)
for (const number of numbers) {
    const button = document.createElement('button')
    button.className = 'px-2 py-1 rounded bg-sky-500 w-12 text-white m-2'
    button.textContent = number
    button.addEventListener('click', (_) => onClick(number))
    buttons.appendChild(button)
}