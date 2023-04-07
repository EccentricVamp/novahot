import { install } from '@twind/core'
import { header } from 'components/header.js'
import { config } from './twind.config.js'
import { main } from 'components/main.js'

install(config)
document.body.className = 'bg-slate-100 text-slate-900'
document.body.appendChild(header)
document.body.appendChild(main)