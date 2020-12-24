import { setupServer } from 'msw/node'
import { createHandlers } from 'mocks/handlers'
import data from 'mocks/data.json'

export const server = setupServer(...createHandlers(data))
