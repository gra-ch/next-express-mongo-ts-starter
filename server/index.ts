import express, { Request, Response } from 'express'
import next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 3000

;(async () => {
  try {
    await app.prepare()
    const server = express()

    server.get('/api/hello', (req, res) => {
      return res.status(200).json({ msg: 'hello world' })
    })

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res)
    })
    server.listen(port, (err?: unknown) => {
      if (err) throw err
      console.log(`> Ready on localhost:${port}`)
    })
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
})()
