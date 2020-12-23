import fs from 'fs'
import { setupServer } from 'msw/node'
import { handlers } from 'mocks/handlers'

let file = fs.readFileSync('mocks/data/data.json')
let data = JSON.parse(file.toString())

export const server = setupServer(...handlers(data))
