export function table(rows, exclude) {
    const table = document.createElement('table')
    table.className = 'border border-slate-200'
    
    for (const row of rows) {
        const tableRow = document.createElement('tr')
        tableRow.className = 'even:bg-slate-50'
        
        for (const key in row) {
            if(exclude.includes(key)) continue
            
            const tableDatum = document.createElement('td')
            tableDatum.textContent = row[key]
            tableDatum.dataset['key'] = key

            tableRow.appendChild(tableDatum)
        }
        
        table.appendChild(tableRow)
    }

    return table
}