import { setupWorker } from 'msw'
import { createHandlers } from '@/mocks/handlers'

export const worker = setupWorker(...createHandlers())
