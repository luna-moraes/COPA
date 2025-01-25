import z, { ZodObject, ZodOptional, ZodString, ZodTypeAny } from 'zod'
import {buildWithStyle} from '../builder/style-builder'

export const ContentSchema = z.object({
    inicio: z.object({
        // Conteúdo do início
        logo: z.string(),
        mensagem: z.string(),
        botao: z.string(),

        // Estilo do Início
        ...buildStyledProps({
            cor: ['mensagem', 'botao'],
            fonte: ['mensagem', 'botao'],
            peso: ['mensagem', 'botao'],
            sombra: ['mensagem', 'botao'],
            preenchimento: ['logo', 'mensagem', 'botao'],
            espaco: ['logo', 'mensagem'],
            fundo: ['botao'],
            formatacao: ['mensagem'],
            alinhamento: ['mensagem'],
            larguraMaxima: ['mensagem'],
        }),
    }),
    sobre: z.object({
        // Conteúdo do Sobre Nosso Trabalho
        titulo: z.string().optional(),
        descricao: z.string().optional(),

        // Estilo do Sobre Nosso Trabalho
        ...buildStyledProps({
            cor: ['titulo', 'descricao'],
            fonte: ['titulo', 'descricao'],
            peso: ['titulo', 'descricao'],
            sombra: ['titulo', 'descricao'],
            preenchimento: ['titulo', 'descricao'],
            espaco: ['titulo', 'descricao'],
            fundo: ['titulo', 'descricao'],
            formatacao: ['titulo', 'descricao'],
            alinhamento: ['titulo', 'descricao'],
            larguraMaxima: ['titulo', 'descricao'],
        }),
    }),
    equipe: z.object({
        // Conteúdo da Equipe
        titulo: z.string().optional(),
        profissionais: z.object({
            foto: z.string(),
            nome: z.string(),
            formacao: z.string(),
            descricao: z.string().trim(),
            crp: z.string(),
            contato: z.string(),
            botao: z.string(),
        }).array(),

        // Estilo da Equipe
        ...buildStyledProps({
            cor: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
            fonte: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
            peso: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
            sombra: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao'],
            preenchimento: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'botao',
                'primeiro_profissional', 'ultimo_profissional', 'profissional',
                'profissionais'],
            espaco: ['titulo', 'nome', 'formacao', 'descricao', 'crp', 'profissionais'],
            fundo: ['botao'],
            formatacao: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
            alinhamento: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
            larguraMaxima: ['titulo', 'nome', 'formacao', 'descricao', 'crp'],
        }),
    }),
    rodape: z.object({
        esquerda: z.object({
            // Conteúdo Esquerdo do Rodapé
            titulo: z.string(),
            subtitulo: z.string(),

            // Estilo Esquerdo do Rodapé
            ...buildStyledProps({
                cor: ['titulo', 'subtitulo'],
                fonte: ['titulo', 'subtitulo'],
                peso: ['titulo', 'subtitulo'],
                sombra: ['titulo', 'subtitulo'],
                preenchimento: ['titulo', 'subtitulo'],
                espaco: ['titulo', 'subtitulo'],
                fundo: ['titulo', 'subtitulo'],
                formatacao: ['titulo', 'subtitulo'],
                alinhamento: ['titulo', 'subtitulo'],
                larguraMaxima: ['titulo', 'subtitulo'],
            }),
        }),
        direita: z.object({
            // Conteúdo Direito do Rodapé
            titulo: z.string(),
            descricao: z.string().trim(),

            // Estilo Direito do Rodapé
            ...buildStyledProps({
                cor: ['titulo', 'descricao'],
                fonte: ['titulo', 'descricao'],
                peso: ['titulo', 'descricao'],
                sombra: ['titulo', 'descricao'],
                preenchimento: ['titulo', 'descricao'],
                espaco: ['titulo', 'descricao'],
                fundo: ['titulo', 'descricao'],
                formatacao: ['titulo', 'descricao'],
                alinhamento: ['titulo', 'descricao'],
                larguraMaxima: ['titulo', 'descricao'],
            }),
        }),
    }),
})

export const ContentModel = ContentSchema
    .extend({})
    .transform(content => ({
        ...content,
        inicio: buildWithStyle(content.inicio,
            ['mensagem', 'botao']),
        sobre: buildWithStyle(content.sobre,
            ['titulo', 'descricao']),
        equipe: buildWithStyle(content.equipe,
            ['titulo', 'subtitulo', 'descricao', 'informacao', 'botao']),
        rodape: {
            esquerda: buildWithStyle(content.rodape.esquerda,
                ['titulo', 'subtitulo']),
            direita: buildWithStyle(content.rodape.direita,
                ['titulo', 'descricao'])
        }
    }))

export type Content = z.infer<typeof ContentModel>

type StyledKey =
    | 'cor'
    | 'sombra'
    | 'fundo'
    | 'fonte'
    | 'peso'
    | 'espaco'
    | 'preenchimento'
    | 'formatacao'
    | 'alinhamento'
    | 'larguraMaxima'
function buildStyledProps<P extends string>(styled: Record<StyledKey, P[]>) {
    const result = {
        cor: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        sombra: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        fundo: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        fonte: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        peso: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        espaco: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        preenchimento: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        formatacao: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        alinhamento: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        larguraMaxima: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
    }

    const styledKeys = Object.keys(styled) as StyledKey[]

    for (const styledKey of styledKeys) {
        const propsShape: Partial<Record<P, ZodOptional<ZodString>>> = {}

        const props = styled[styledKey]
        for (const prop of props) {
            propsShape[prop] = z.string().optional()
        }

        result[styledKey] = z.object(propsShape as Record<P, ZodOptional<ZodString>>).optional()
    }

    return result
}
