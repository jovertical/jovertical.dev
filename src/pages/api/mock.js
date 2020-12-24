import fs from 'fs/promises'
import { sleep } from '@/helpers'

export default async (req, res) => {
  if (req.method === 'POST') {
    let data = JSON.stringify(req.body)

    await fs.writeFile('src/mocks/data.json', data)
    await sleep()

    return res.end(data)
  }

  return res.end()
}
