import express from 'express'
import {env, dist} from './config'

const app = express()

app.set('view engine', 'ejs')
app.use(express.static(dist))

app.get('/home', (req, res) => {
    res.render('../pages/home.ejs', {user: 'Emanuel'})
})

app.listen(env.port, () => {
    console.log('listening on', env.port)
})
