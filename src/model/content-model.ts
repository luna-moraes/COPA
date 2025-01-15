import z from 'zod'
import {buildWithStyle} from '../builder/style-builder'

export const ContentSchema = z.object({
    inicio: z.object({
        // Conteúdo do início
        titulo: z.string(),
        subtitulo: z.string(),
        mensagem: z.string(),
        botao: z.string(),

        // Estilo do Início
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
        peso: z.object({
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
        cor: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        sombra: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
        }).optional(),
        fundo: z.object({
            botao: z.string().optional(),
        }).optional(),
        fonte: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        peso: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
            botao: z.string().optional(),
        }).optional(),
        espaco: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
            profissionais: z.string().optional(),
        }).optional(),
        preenchimento: z.object({
            titulo: z.string().optional(),
            nome: z.string().optional(),
            formacao: z.string().optional(),
            descricao: z.string().optional(),
            crp: z.string().optional(),
            botao: z.string().optional(),
            primeiro_profissional: z.string().optional(),
            ultimo_profissional: z.string().optional(),
            profissional: z.string().optional(),
            profissionais: z.string().optional(),
        }).optional(),
    }),
    rodape: z.object({
        esquerda: z.object({
            // Conteúdo Esquerdo do Rodapé
            titulo: z.string(),
            subtitulo: z.string(),

            // Estilo Esquerdo do Rodapé
            cor: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
            sombra: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
            fonte: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
            peso: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
            espaco: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
            preenchimento: z.object({
                titulo: z.string().optional(),
                subtitulo: z.string().optional(),
            }).optional(),
        }),
        direita: z.object({
            // Conteúdo Direito do Rodapé
            titulo: z.string(),
            descricao: z.string().trim(),

            // Estilo Direito do Rodapé
            cor: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(),
            sombra: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(),
            fonte: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(),
            peso: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(),
            espaco: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(),
            preenchimento: z.object({
                titulo: z.string().optional(),
                descricao: z.string().optional(),
            }).optional(), 
        }),
    }),
})

export const ContentModel = ContentSchema
    .extend({})
    .transform(content => ({
        ...content,
        inicio: buildWithStyle(content.inicio,
            ['titulo', 'subtitulo', 'mensagem', 'botao']),
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
