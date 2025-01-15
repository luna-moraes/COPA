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
        titulo: zod_1.default.string(), subtitulo: zod_1.default.string(), mensagem: zod_1.default.string(), botao: zod_1.default.string() }, buildStyledProps({
        cor: ['titulo', 'subtitulo', 'mensagem', 'botao'],
        fonte: ['titulo', 'subtitulo', 'mensagem', 'botao'],
        peso: ['titulo', 'subtitulo', 'mensagem', 'botao'],
        sombra: ['titulo', 'subtitulo', 'mensagem', 'botao'],
        preenchimento: ['titulo', 'subtitulo', 'mensagem', 'botao'],
        espaco: ['titulo', 'subtitulo', 'mensagem'],
        fundo: ['botao'],
    }))),
    sobre: zod_1.default.object(Object.assign({ 
        // Conteúdo do Sobre Nosso Trabalho
        titulo: zod_1.default.string().optional(), descricao: zod_1.default.string().optional() }, buildStyledProps({
        cor: ['titulo', 'descricao'],
        fonte: ['titulo', 'descricao'],
        peso: ['titulo', 'descricao'],
        sombra: ['titulo', 'descricao'],
        preenchimento: ['titulo', 'descricao'],
        espaco: ['titulo', 'descricao'],
        fundo: ['titulo', 'descricao'],
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
        espaco: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'profissionais'],
        fundo: ['botao'],
    }))),
    rodape: zod_1.default.object({
        esquerda: zod_1.default.object(Object.assign({ 
            // Conteúdo Esquerdo do Rodapé
            titulo: zod_1.default.string(), subtitulo: zod_1.default.string() }, buildStyledProps({
            cor: ['titulo', 'subtitulo'],
            fonte: ['titulo', 'subtitulo'],
            peso: ['titulo', 'subtitulo'],
            sombra: ['titulo', 'subtitulo'],
            preenchimento: ['titulo', 'subtitulo'],
            espaco: ['titulo', 'subtitulo'],
            fundo: ['titulo', 'subtitulo'],
        }))),
        direita: zod_1.default.object(Object.assign({ 
            // Conteúdo Direito do Rodapé
            titulo: zod_1.default.string(), descricao: zod_1.default.string().trim() }, buildStyledProps({
            cor: ['titulo', 'descricao'],
            fonte: ['titulo', 'descricao'],
            peso: ['titulo', 'descricao'],
            sombra: ['titulo', 'descricao'],
            preenchimento: ['titulo', 'descricao'],
            espaco: ['titulo', 'descricao'],
            fundo: ['titulo', 'descricao'],
        }))),
    }),
});
exports.ContentModel = exports.ContentSchema
    .extend({})
    .transform(content => (Object.assign(Object.assign({}, content), { inicio: (0, style_builder_1.buildWithStyle)(content.inicio, ['titulo', 'subtitulo', 'mensagem', 'botao']), sobre: (0, style_builder_1.buildWithStyle)(content.sobre, ['titulo', 'descricao']), equipe: (0, style_builder_1.buildWithStyle)(content.equipe, ['titulo', 'subtitulo', 'descricao', 'informacao', 'botao']), rodape: {
        esquerda: (0, style_builder_1.buildWithStyle)(content.rodape.esquerda, ['titulo', 'subtitulo']),
        direita: (0, style_builder_1.buildWithStyle)(content.rodape.direita, ['titulo', 'descricao'])
    } })));
function buildStyledProps(styled) {
    const result = {
        cor: zod_1.default.object({}).optional(),
        sombra: zod_1.default.object({}).optional(),
        fundo: zod_1.default.object({}).optional(),
        fonte: zod_1.default.object({}).optional(),
        peso: zod_1.default.object({}).optional(),
        espaco: zod_1.default.object({}).optional(),
        preenchimento: zod_1.default.object({}).optional(),
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
