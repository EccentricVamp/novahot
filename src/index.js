import { install } from '@twind/core'
import { header } from 'components/header.js'
import { main } from 'components/main.js'
import { table } from 'components/table.js'
import spells from 'data/spells.json' assert { type: 'json' }
import { config } from './twind.config.js'

install(config)

const categories = [
    'combat',
    'detection',
    'health',
    'illusion',
    'manipulation'
]

const exclude = ['category', 'target']

for (const category of categories) {
    const heading = document.createElement('h2')
    heading.classList = 'text-2xl'
    heading.innerText = category
    main.appendChild(heading)

    const spellsInCategory = spells
        .filter(spell => spell.category == category)

    const spellTable = table(spellsInCategory, exclude)
    main.appendChild(spellTable)
}

document.body.appendChild(header)
document.body.appendChild(main)