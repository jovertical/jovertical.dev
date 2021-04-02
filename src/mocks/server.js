import { setupServer } from 'msw/node';
import { createHandlers } from '@/mocks/handlers';
import data from '@/mocks/data.json';

export let server = setupServer(...createHandlers(data));
