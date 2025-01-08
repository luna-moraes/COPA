import z from 'zod'
import {buildWithStyle} from '../builder/style-builder'

export const ContentSchema = z.object({
    inicio: z.object({
        cor: z.object({
            titulo: z.string().optional(),
            subtitulo: z.string().optional(),
            mensagem: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        sombra: z.object({
            titulo: z.string().optional(),
            subtitulo: z.string().optional(),
            mensagem: z.string().optional(),
        }).optional(),
        fundo: z.object({
            botao: z.string().optional(),
        }).optional(),
        fonte: z.object({
            titulo: z.string().optional(),
            subtitulo: z.string().optional(),
            mensagem: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        espaco: z.object({
            titulo: z.string().optional(),
            subtitulo: z.string().optional(),
            mensagem: z.string().optional(),
        }).optional(),
        preenchimento: z.object({
            titulo: z.string().optional(),
            subtitulo: z.string().optional(),
            mensagem: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        titulo: z.string(),
        subtitulo: z.string(),
        mensagem: z.string(),
        botao: z.string(),
    }),
    equipe: z.object({
        cor: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        sombra: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
        }).optional(),
        fundo: z.object({
            botao: z.string().optional(),
        }).optional(),
        fonte: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        espaco: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
        }).optional(),
        preenchimento: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        profissionais: z.object({
            imagem: z.string(),
            nome: z.string(),
            formacao: z.string(),
            mensagem: z.string().trim(),
            crp: z.string(),
            contato: z.string(),
        }).array()
    }),
    rodape: z.object({
        cor: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
        }).optional(),
        sombra: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
        }).optional(),
        fonte: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        espaco: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
        }).optional(),
        preenchimento: z.object({
            titulo: z.string().optional(),
            texto: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        esquerda: z.object({
            titulo: z.string(),
            subtitulo: z.string(),
        }),
        direita: z.object({
            titulo: z.string(),
            descricao: z.string().trim()
        })
    })
})

export const ContentModel = ContentSchema
    .extend({})
    .transform(content => ({
        ...content,
        inicio: buildWithStyle(content.inicio,
            ['titulo', 'subtitulo', 'mensagem', 'botao']),
        equipe: buildWithStyle(content.equipe,
            ['titulo', 'texto', 'botao']),
        rodape: buildWithStyle(content.rodape,
            ['titulo', 'texto']),
    }))

export type Content = z.infer<typeof ContentModel>
