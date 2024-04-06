import { setupWorker } from 'msw/browser'

import { env } from '../env'
import { attendeesMock } from './attendees-mock.ts'

export const worker = setupWorker(attendeesMock)

export async function enableMSW() {
  if (env.MODE === 'mock') await worker.start()
}
