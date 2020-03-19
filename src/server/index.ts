import * as express from 'express'
import * as path from 'path'
import envs from './envs'
import expressConfig from './config'

const { serverPort } = envs

const app = express()

expressConfig(app)

const index = 'client/index.html'
const pathToIndex = path.resolve(__dirname, '..', index)

app.get('/',
	async (req, res) => {
		res.sendFile(pathToIndex)
	}
)

app.get('/info', (req, res) => {
  res.json([
    { id: 1, name: 'Torvald' },
    { id: 2, name: 'Nikolay' },
    { id: 3, name: 'Igor' },
  ])
})

app.listen(serverPort, () => {
	// tslint:disable-next-line
	console.log('dev1.server starts')
})
