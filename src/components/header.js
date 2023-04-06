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

const rollAnchor = document.createElement('a')
rollAnchor.href = `${URL_ROOT}/roll.html`
rollAnchor.className = 'text-lg mx-3'
rollAnchor.textContent = 'Roll'
container.appendChild(rollAnchor)