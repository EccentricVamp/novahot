import { h, render } from 'preact'
import { install } from '@twind/core'
import { layout } from 'components/layout.js'
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

const spellTables = []

for (const category of categories) {
    spellTables.push(h('h2', { class: 'text-2xl' }, category))
    spellTables.push(table(spells.filter(spell => spell.category == category), exclude))
}

render(layout(spellTables), document.body)