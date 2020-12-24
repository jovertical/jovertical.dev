import fs from 'fs'
import { sleep } from '@/helpers'

export default async (req, res) => {
  if (req.method === 'POST') {
    let data = JSON.stringify(req.body)

    await writeAsync('src/mocks/data.json', data)
    await sleep()

    return res.end(data)
  }

  return res.end()
}

async function writeAsync(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err)
      }

      resolve()
    })
  })
}
