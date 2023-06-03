import { roll } from 'redroll'

const ID_LOG = 'log'

/**
 * 
 * @param {number} dice Number of dice to roll
 */
function onClick(dice) {
    const result = roll(`${dice}d6`)
    const log = document.getElementById(ID_LOG)
    const row = document.createElement('div')
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

/**
 * @param {number} magic 
 */
export function spell(magic) {
    const div = document.createElement('div')
    const MIN_BUTTONS = 1
    const MAX_BUTTONS = magic * 2

    const numbers = Array.from(new Array(MAX_BUTTONS), (_, i) => i + MIN_BUTTONS)
    for (const number of numbers) {
        const button = document.createElement('button')
        button.className = 'px-2 py-1 rounded bg-sky-500 w-12 text-white m-2'
        button.textContent = number
        button.addEventListener('click', (_) => onClick(number))
        div.appendChild(button)
    }
    
    const log = document.createElement('div');
    log.id = ID_LOG
    div.appendChild(log)

    return div
}