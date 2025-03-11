import express from 'express'
import {content, env, publicPath} from './config'
import {page, asset} from './util'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (_, res) => {
    res.render(page('index'), {...content, asset})
})

app.use(express.static(publicPath))

app.listen(env.port, () => {
    console.log('listening on', env.port)
})
