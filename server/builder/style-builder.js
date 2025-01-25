"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWithStyle = exports.buildStyle = void 0;
const buildStyle = (options) => {
    const color = options.cor
        ? `color: ${options.cor};`
        : '';
    const textShadow = options.sombra
        ? `text-shadow: ${options.sombra};`
        : '';
    const backgroundColor = options.fundo
        ? `background-color: ${options.fundo};`
        : '';
    const font = options.fonte
        ? `font-size: ${options.fonte};`
        : '';
    const fontWeight = options.peso
        ? `font-weight: ${options.peso};`
        : '';
    const margin = options.espaco
        ? `margin: ${options.espaco};`
        : '';
    const padding = options.preenchimento
        ? `padding: ${options.preenchimento};`
        : '';
    const whiteSpace = options.formatacao
        ? `white-space: ${options.formatacao};`
        : '';
    const textAlign = options.alinhamento
        ? `text-align: ${options.alinhamento};`
        : '';
    const maxWidth = options.larguraMaxima
        ? `max-width: ${options.larguraMaxima};`
        : '';
    return [
        color,
        textShadow,
        backgroundColor,
        font,
        fontWeight,
        margin,
        padding,
        whiteSpace,
        textAlign,
        maxWidth,
    ].join('');
};
exports.buildStyle = buildStyle;
const buildWithStyle = (options, _styles) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const styleNames = Object.keys(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ((_a = options.cor) !== null && _a !== void 0 ? _a : {})), ((_b = options.sombra) !== null && _b !== void 0 ? _b : {})), ((_c = options.fundo) !== null && _c !== void 0 ? _c : {})), ((_d = options.fonte) !== null && _d !== void 0 ? _d : {})), ((_e = options.peso) !== null && _e !== void 0 ? _e : {})), ((_f = options.espaco) !== null && _f !== void 0 ? _f : {})), ((_g = options.preenchimento) !== null && _g !== void 0 ? _g : {})), ((_h = options.formatacao) !== null && _h !== void 0 ? _h : {})), ((_j = options.alinhamento) !== null && _j !== void 0 ? _j : {})), ((_k = options.larguraMaxima) !== null && _k !== void 0 ? _k : {})));
    return Object.assign(Object.assign({}, options), { styles: styleNames.reduce((styles, name) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            styles[name] = (0, exports.buildStyle)({
                cor: (_a = options.cor) === null || _a === void 0 ? void 0 : _a[name],
                sombra: (_b = options.sombra) === null || _b === void 0 ? void 0 : _b[name],
                fundo: (_c = options.fundo) === null || _c === void 0 ? void 0 : _c[name],
                fonte: (_d = options.fonte) === null || _d === void 0 ? void 0 : _d[name],
                peso: (_e = options.peso) === null || _e === void 0 ? void 0 : _e[name],
                espaco: (_f = options.espaco) === null || _f === void 0 ? void 0 : _f[name],
                preenchimento: (_g = options.preenchimento) === null || _g === void 0 ? void 0 : _g[name],
                formatacao: (_h = options.formatacao) === null || _h === void 0 ? void 0 : _h[name],
                alinhamento: (_j = options.alinhamento) === null || _j === void 0 ? void 0 : _j[name],
                larguraMaxima: (_k = options.larguraMaxima) === null || _k === void 0 ? void 0 : _k[name],
            });
            return styles;
        }, {}) });
};
exports.buildWithStyle = buildWithStyle;
