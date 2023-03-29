import { h } from 'preact'
import { header } from 'components/header.js'

export function layout(content) {
    return [
        header,
        h('main', { class: 'container mx-auto my-3 flex flex-col' }, content)
    ]
}