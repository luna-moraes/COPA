"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const util_1 = require("./util");
const proxy_service_1 = require("./services/proxy-service");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.get('/', (_, res, next) => {
    if (!config_1.env.proxyHtml) {
        return next();
    }
    proxy_service_1.proxyService.request(config_1.env.proxyHtml)
        .then(data => res.send(data))
        .catch(next);
});
app.get('/home', (_, res) => {
    res.render((0, util_1.page)('home'), config_1.content.inicio);
});
app.get('/about', (_, res) => {
    res.render((0, util_1.page)('about'), config_1.content.sobre);
});
app.get('/team', (_, res) => {
    res.render((0, util_1.page)('team'), config_1.content.equipe);
});
app.get('/footer', (_, res) => {
    res.render((0, util_1.page)('footer'), config_1.content.rodape);
});
app.use(express_1.default.static(config_1.publicPath));
app.listen(config_1.env.port, () => {
    console.log('listening on', config_1.env.port);
});
