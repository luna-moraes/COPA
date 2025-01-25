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
    const background = options.fundo
        ? `background: ${options.fundo};`
        : '';
    const backgroudSize = options.fundoTamanho
        ? `background-size: ${options.fundoTamanho};`
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
    const width = options.largura
        ? `width: ${options.largura};`
        : '';
    const maxWidth = options.larguraMaxima
        ? `max-width: ${options.larguraMaxima};`
        : '';
    const height = options.altura
        ? `height: ${options.altura};`
        : '';
    const border = options.borda
        ? `border: ${options.borda};`
        : '';
    const borderBottom = options.bordaInferior
        ? `border: ${options.bordaInferior};`
        : '';
    return [
        color,
        textShadow,
        background,
        backgroudSize,
        font,
        fontWeight,
        margin,
        padding,
        whiteSpace,
        textAlign,
        width,
        maxWidth,
        height,
        border,
        borderBottom,
    ].join('');
};
exports.buildStyle = buildStyle;
const buildWithStyle = (options, _styles) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const styleNames = Object.keys(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ((_a = options.cor) !== null && _a !== void 0 ? _a : {})), ((_b = options.sombra) !== null && _b !== void 0 ? _b : {})), ((_c = options.fundo) !== null && _c !== void 0 ? _c : {})), ((_d = options.fundoTamanho) !== null && _d !== void 0 ? _d : {})), ((_e = options.fonte) !== null && _e !== void 0 ? _e : {})), ((_f = options.peso) !== null && _f !== void 0 ? _f : {})), ((_g = options.espaco) !== null && _g !== void 0 ? _g : {})), ((_h = options.preenchimento) !== null && _h !== void 0 ? _h : {})), ((_j = options.formatacao) !== null && _j !== void 0 ? _j : {})), ((_k = options.alinhamento) !== null && _k !== void 0 ? _k : {})), ((_l = options.largura) !== null && _l !== void 0 ? _l : {})), ((_m = options.larguraMaxima) !== null && _m !== void 0 ? _m : {})), ((_o = options.altura) !== null && _o !== void 0 ? _o : {})), ((_p = options.borda) !== null && _p !== void 0 ? _p : {})), ((_q = options.bordaInferior) !== null && _q !== void 0 ? _q : {})));
    return Object.assign(Object.assign({}, options), { styles: styleNames.reduce((styles, name) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
            styles[name] = (0, exports.buildStyle)({
                cor: (_a = options.cor) === null || _a === void 0 ? void 0 : _a[name],
                sombra: (_b = options.sombra) === null || _b === void 0 ? void 0 : _b[name],
                fundo: (_c = options.fundo) === null || _c === void 0 ? void 0 : _c[name],
                fundoTamanho: (_d = options.fundoTamanho) === null || _d === void 0 ? void 0 : _d[name],
                fonte: (_e = options.fonte) === null || _e === void 0 ? void 0 : _e[name],
                peso: (_f = options.peso) === null || _f === void 0 ? void 0 : _f[name],
                espaco: (_g = options.espaco) === null || _g === void 0 ? void 0 : _g[name],
                preenchimento: (_h = options.preenchimento) === null || _h === void 0 ? void 0 : _h[name],
                formatacao: (_j = options.formatacao) === null || _j === void 0 ? void 0 : _j[name],
                alinhamento: (_k = options.alinhamento) === null || _k === void 0 ? void 0 : _k[name],
                largura: (_l = options.largura) === null || _l === void 0 ? void 0 : _l[name],
                larguraMaxima: (_m = options.larguraMaxima) === null || _m === void 0 ? void 0 : _m[name],
                altura: (_o = options.altura) === null || _o === void 0 ? void 0 : _o[name],
                borda: (_p = options.borda) === null || _p === void 0 ? void 0 : _p[name],
                bordaInferior: (_q = options.bordaInferior) === null || _q === void 0 ? void 0 : _q[name],
            });
            return styles;
        }, {}) });
};
exports.buildWithStyle = buildWithStyle;
