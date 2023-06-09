const URL_ROOT = 'http://127.0.0.1:3000/src'
const TITLE = 'Novahot'

export const header = document.createElement('header')
header.className = 'border-b'

const container = document.createElement('div')
container.className = 'container mx-auto flex items-end'
header.appendChild(container);

const title = document.createElement('h1')
title.className = 'flex-shrink text-3xl'
container.appendChild(title)

const titleAnchor = document.createElement('a')
titleAnchor.href = `${URL_ROOT}/index.html`
titleAnchor.textContent = TITLE
title.appendChild(titleAnchor)

const spellsAnchor = document.createElement('a')
spellsAnchor.href = `${URL_ROOT}/spells.html`
spellsAnchor.className = 'text-lg mx-3'
spellsAnchor.textContent = 'Spells'
container.appendChild(spellsAnchor)