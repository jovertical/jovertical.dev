import { setupWorker } from 'msw'
import { createHandlers } from '@/mocks/handlers'

export let worker = setupWorker(...createHandlers())
