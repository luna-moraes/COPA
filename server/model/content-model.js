"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = exports.ContentSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const style_builder_1 = require("../builder/style-builder");
exports.ContentSchema = zod_1.default.object({
    inicio: zod_1.default.object(Object.assign({ 
        // Conteúdo do início
        imagem: zod_1.default.string(), mensagem: zod_1.default.string(), botao: zod_1.default.string() }, buildStyledProps({
        cor: ['mensagem', 'botao'],
        fonte: ['mensagem', 'botao'],
        peso: ['mensagem', 'botao'],
        sombra: ['mensagem', 'botao'],
        preenchimento: ['imagem', 'mensagem', 'botao'],
        espaco: ['imagem', 'mensagem', 'divisor'],
        fundo: ['botao', 'pagina', 'divisor'],
        fundoTamanho: ['botao', 'pagina', 'divisor'],
        formatacao: ['mensagem'],
        alinhamento: ['mensagem'],
        largura: ['imagem', 'mensagem'],
        larguraMaxima: ['imagem', 'mensagem'],
        altura: ['divisor'],
        borda: ['imagem', 'mensagem', 'botao', 'pagina'],
        bordaInferior: ['imagem', 'mensagem', 'botao', 'pagina'],
        espacamento: ['mensagem'],
        opacidadeFundo: ['pagina'],
    }))),
    sobre: zod_1.default.object(Object.assign({ 
        // Conteúdo do Sobre Nosso Trabalho
        titulo: zod_1.default.string().optional(), descricao: zod_1.default.string().optional(), citacao: zod_1.default.string().optional() }, buildStyledProps({
        cor: ['titulo', 'descricao', 'citacao'],
        fonte: ['titulo', 'descricao', 'citacao'],
        peso: ['titulo', 'descricao', 'citacao'],
        sombra: ['titulo', 'descricao', 'citacao'],
        preenchimento: ['titulo', 'descricao', 'citacao'],
        espaco: ['titulo', 'descricao', 'divisor', 'citacao'],
        fundo: ['titulo', 'descricao', 'pagina', 'divisor', 'citacao'],
        fundoTamanho: ['titulo', 'descricao', 'pagina', 'divisor', 'citacao'],
        formatacao: ['titulo', 'descricao', 'citacao'],
        alinhamento: ['titulo', 'descricao', 'citacao'],
        largura: ['titulo', 'descricao', 'citacao'],
        larguraMaxima: ['titulo', 'descricao', 'citacao'],
        altura: ['divisor', 'citacao'],
        borda: ['titulo', 'descricao', 'pagina', 'citacao'],
        bordaInferior: ['titulo', 'descricao', 'pagina', 'citacao'],
        espacamento: ['descricao', 'citacao'],
        opacidadeFundo: ['pagina'],
    }))),
    equipe: zod_1.default.object(Object.assign({ 
        // Conteúdo da Equipe
        titulo: zod_1.default.string().optional(), profissionais: zod_1.default.object({
            foto: zod_1.default.string(),
            nome: zod_1.default.string(),
            formacao: zod_1.default.string(),
            descricao: zod_1.default.string().trim(),
            crp: zod_1.default.string(),
            contato: zod_1.default.string(),
            botao: zod_1.default.string(),
        }).array() }, buildStyledProps({
        cor: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
        fonte: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
        peso: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
        sombra: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
        preenchimento: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao',
            'primeiro_profissional', 'ultimo_profissional', 'profissional',
            'profissionais'],
        espaco: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'profissionais', 'divisor'],
        fundo: ['botao', 'pagina', 'divisor'],
        fundoTamanho: ['botao', 'pagina', 'divisor'],
        formatacao: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
        alinhamento: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
        largura: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
        larguraMaxima: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
        altura: ['divisor'],
        borda: ['titulo', 'descricao', 'pagina'],
        bordaInferior: ['titulo', 'descricao', 'pagina'],
        espacamento: ['descricao'],
        opacidadeFundo: ['pagina'],
    }))),
    rodape: zod_1.default.object(Object.assign(Object.assign({}, buildStyledProps({
        cor: ['pagina'],
        fonte: ['pagina'],
        peso: ['pagina'],
        sombra: ['pagina'],
        preenchimento: ['pagina'],
        espaco: ['pagina'],
        fundo: ['pagina'],
        fundoTamanho: ['pagina'],
        formatacao: ['pagina'],
        alinhamento: ['pagina'],
        largura: ['pagina'],
        larguraMaxima: ['pagina'],
        altura: ['pagina'],
        borda: ['pagina'],
        bordaInferior: ['pagina'],
        espacamento: [],
        opacidadeFundo: ['pagina'],
    })), { esquerda: zod_1.default.object(Object.assign({ 
            // Conteúdo Esquerdo do Rodapé
            imagem: zod_1.default.string(), subtitulo: zod_1.default.string() }, buildStyledProps({
            cor: ['subtitulo'],
            fonte: ['subtitulo'],
            peso: ['subtitulo'],
            sombra: ['subtitulo'],
            preenchimento: ['subtitulo'],
            espaco: ['imagem', 'subtitulo', 'divisor'],
            fundo: ['subtitulo', 'pagina'],
            fundoTamanho: ['subtitulo', 'pagina'],
            formatacao: ['subtitulo'],
            alinhamento: ['subtitulo'],
            largura: ['imagem', 'subtitulo'],
            larguraMaxima: ['imagem', 'subtitulo'],
            altura: ['imagem', 'divisor'],
            borda: ['imagem', 'descricao', 'pagina'],
            bordaInferior: ['imagem', 'descricao', 'pagina'],
            espacamento: [],
            opacidadeFundo: ['pagina'],
        }))), direita: zod_1.default.object(Object.assign({ 
            // Conteúdo Direito do Rodapé
            titulo: zod_1.default.string(), descricao: zod_1.default.string().trim() }, buildStyledProps({
            cor: ['titulo', 'descricao'],
            fonte: ['titulo', 'descricao'],
            peso: ['titulo', 'descricao'],
            sombra: ['titulo', 'descricao'],
            preenchimento: ['titulo', 'descricao'],
            espaco: ['titulo', 'descricao', 'divisor'],
            fundo: ['titulo', 'descricao', 'pagina'],
            fundoTamanho: ['titulo', 'descricao', 'pagina'],
            formatacao: ['titulo', 'descricao'],
            alinhamento: ['titulo', 'descricao'],
            largura: ['titulo', 'descricao'],
            larguraMaxima: ['titulo', 'descricao'],
            altura: ['divisor'],
            borda: ['titulo', 'descricao', 'pagina'],
            bordaInferior: ['titulo', 'descricao', 'pagina'],
            espacamento: [],
            opacidadeFundo: ['pagina'],
        }))) })),
});
exports.ContentModel = exports.ContentSchema
    .extend({})
    .transform(content => (Object.assign(Object.assign({}, content), { inicio: (0, style_builder_1.buildWithStyle)(content.inicio, ['imagem', 'mensagem', 'botao', 'pagina', 'divisor']), sobre: (0, style_builder_1.buildWithStyle)(content.sobre, ['titulo', 'descricao', 'pagina', 'divisor']), equipe: (0, style_builder_1.buildWithStyle)(content.equipe, ['titulo', 'subtitulo', 'descricao', 'informacao', 'botao', 'pagina', 'divisor']), rodape: Object.assign(Object.assign({}, (0, style_builder_1.buildWithStyle)(content.rodape, ['pagina'])), { esquerda: (0, style_builder_1.buildWithStyle)(content.rodape.esquerda, ['imagem', 'subtitulo', 'pagina']), direita: (0, style_builder_1.buildWithStyle)(content.rodape.direita, ['titulo', 'descricao', 'pagina']) }) })));
function buildStyledProps(styled) {
    const result = {
        cor: zod_1.default.object({}).optional(),
        sombra: zod_1.default.object({}).optional(),
        fundo: zod_1.default.object({}).optional(),
        fundoTamanho: zod_1.default.object({}).optional(),
        fonte: zod_1.default.object({}).optional(),
        peso: zod_1.default.object({}).optional(),
        espaco: zod_1.default.object({}).optional(),
        preenchimento: zod_1.default.object({}).optional(),
        formatacao: zod_1.default.object({}).optional(),
        alinhamento: zod_1.default.object({}).optional(),
        largura: zod_1.default.object({}).optional(),
        larguraMaxima: zod_1.default.object({}).optional(),
        altura: zod_1.default.object({}).optional(),
        borda: zod_1.default.object({}).optional(),
        bordaInferior: zod_1.default.object({}).optional(),
        espacamento: zod_1.default.object({}).optional(),
        opacidadeFundo: zod_1.default.object({}).optional(),
    };
    const styledKeys = Object.keys(styled);
    for (const styledKey of styledKeys) {
        const propsShape = {};
        const props = styled[styledKey];
        for (const prop of props) {
            propsShape[prop] = zod_1.default.string().optional();
        }
        result[styledKey] = zod_1.default.object(propsShape).optional();
    }
    return result;
}
