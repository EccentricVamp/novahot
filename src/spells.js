import { dialog } from 'components/dialog.js'
import { table } from 'components/table.js'
import spells from 'data/spells.json' assert { type: 'json' }
import { main } from 'components/main.js'

const categories = [
    'combat',
    'detection',
    'health',
    'illusion',
    'manipulation'
]

const exclude = ['category', 'target']

const attributes = {
    magic: 5,
    logic: 5
}

const skills = {
    spellcasting: 5
}

for (const category of categories) {
    const heading = document.createElement('h2')
    heading.classList = 'text-2xl'
    heading.textContent = category
    main.appendChild(heading)

    const spellsInCategory = spells
        .filter((spell) => spell.category == category)

    const spellTable = table(spellsInCategory, exclude, onClick)
    main.appendChild(spellTable)
}

document.body.appendChild(dialog)

function onClick(event) {
    const children = event.currentTarget.childNodes;
    for (const child of children) {
        if (child.dataset['key'] == 'drain') {
            console.log(child.textContent)
            dialog.showModal()
        }
    }
}
const rows = document.getElementsByTagName('tr')
for (const row of rows) {
    row.addEventListener('click', onClick)
}

