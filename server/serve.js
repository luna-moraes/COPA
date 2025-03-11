"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./config");
const util_1 = require("./util");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.get('/', (_, res) => {
    res.render((0, util_1.page)('index'), Object.assign(Object.assign({}, config_1.content), { asset: util_1.asset }));
});
app.use(express_1.default.static(config_1.publicPath));
app.listen(config_1.env.port, () => {
    console.log('listening on', config_1.env.port);
});
