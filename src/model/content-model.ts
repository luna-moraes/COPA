import z, { ZodOptional, ZodString } from 'zod'
import {buildWithStyle, StyledKey} from '../builder/style-builder'

export const ContentSchema = z.object({
    inicio: z.object({
        // Conteúdo do início
        imagem: z.string(),
        mensagem: z.string(),
        botao: z.string(),

        // Estilo do Início
        ...buildStyledProps({
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
            espaco: ['titulo', 'descricao', 'divisor'],
            fundo: ['titulo', 'descricao', 'pagina', 'divisor'],
            fundoTamanho: ['titulo', 'descricao', 'pagina', 'divisor'],
            formatacao: ['titulo', 'descricao'],
            alinhamento: ['titulo', 'descricao'],
            largura: ['titulo', 'descricao'],
            larguraMaxima: ['titulo', 'descricao'],
            altura: ['divisor'],
            borda: ['titulo', 'descricao', 'pagina'],
            bordaInferior: ['titulo', 'descricao', 'pagina'],
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
        }),
    }),
    rodape: z.object({
        esquerda: z.object({
            // Conteúdo Esquerdo do Rodapé
            imagem: z.string(),
            subtitulo: z.string(),

            // Estilo Esquerdo do Rodapé
            ...buildStyledProps({
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
            }),
        }),
    }),
})

export const ContentModel = ContentSchema
    .extend({})
    .transform(content => ({
        ...content,
        inicio: buildWithStyle(content.inicio,
            ['imagem', 'mensagem', 'botao', 'pagina', 'divisor']),
        sobre: buildWithStyle(content.sobre,
            ['titulo', 'descricao', 'pagina', 'divisor']),
        equipe: buildWithStyle(content.equipe,
            ['titulo', 'subtitulo', 'descricao', 'informacao', 'botao', 'pagina', 'divisor']),
        rodape: {
            esquerda: buildWithStyle(content.rodape.esquerda,
                ['imagem', 'subtitulo', 'pagina']),
            direita: buildWithStyle(content.rodape.direita,
                ['titulo', 'descricao', 'pagina'])
        }
    }))

export type Content = z.infer<typeof ContentModel>

function buildStyledProps<P extends string>(styled: Record<StyledKey, P[]>) {
    const result = {
        cor: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        sombra: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        fundo: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        fundoTamanho: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        fonte: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        peso: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        espaco: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        preenchimento: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        formatacao: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        alinhamento: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        largura: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        larguraMaxima: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        altura: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        borda: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
        bordaInferior: z.object({} as Record<P, ZodOptional<ZodString>>).optional(),
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
