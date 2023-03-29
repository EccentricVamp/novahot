import { h } from 'preact'

export const header = h(
    'header',
    { class: 'border-b' },
    h('h1',{ class: 'container mx-auto text-3xl' }, 'Novahot')
)