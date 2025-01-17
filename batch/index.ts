import path from 'node:path'
import Bree from 'bree'
import Graceful from '@ladjs/graceful'

const main = async () => {
  const bree = new Bree({
    root: path.join(__dirname, 'jobs'),
    jobs: [
      {
        name: 'crawl',
        interval: '10s'
      }
    ],
    defaultExtension: process.env.NODE_ENV === 'production' ? 'js' : 'ts'
  })

  const graceful = new Graceful({ brees: [bree] })
  graceful.listen()

  await bree.start()
}

main()
