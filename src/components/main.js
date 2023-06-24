/**
 * @type {HTMLElement}
 */
let _element;

/**
 * 
 * @param {HTMLElement?} element 
 * @returns {HTMLElement}
 */
export function main(element) {
    if (element) _element = element
    else _element = document.createElement('main')
    
    _element.classList.add('container', 'mx-auto', 'my-3', 'flex', 'flex-col')
    return _element
}

export const ID_MAIN = 'main'