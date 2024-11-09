import express from 'express'
import {content, env, publicPath} from './config'
import {page} from './util'
import {proxyService} from './services/proxy-service'

const app = express()

app.set('view engine', 'ejs')

app.get('/', (_, res, next) => {
    if (!env.proxyHtml) {
        return next()
    }

    proxyService.request(env.proxyHtml)
        .then(data => res.send(data))
        .catch(next)
})

app.get('/home', (_, res) => {
    res.render(page('home'), content.inicio)
})

app.get('/team', (_, res) => {
    res.render(page('team'), content.equipe)
})

app.use(express.static(publicPath))

app.listen(env.port, () => {
    console.log('listening on', env.port)
})
