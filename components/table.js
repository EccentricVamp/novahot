import { h } from 'preact'

export function table(rows, exclude) {
    const tableRows = []
    for (const row of rows) {
        const tableData = []
        for (const key in row) {
            if(exclude.indexOf(key) > -1) continue
            tableData.push(h('td', null, row[key]))
        }
        tableRows.push(
            h('tr', { class: 'even:bg-slate-50' }, tableData)
        )
    }
    return h('table', { class: 'border border-slate-200'}, tableRows)
}