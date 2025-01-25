export type StyledKey =
    | 'cor'
    | 'sombra'
    | 'fundo'
    | 'fundoTamanho'
    | 'fonte'
    | 'peso'
    | 'espaco'
    | 'preenchimento'
    | 'formatacao'
    | 'alinhamento'
    | 'larguraMaxima'
    | 'altura'
    | 'borda'
    | 'bordaInferior'

export type StyleOptions = Partial<Record<StyledKey, string>>

export const buildStyle = (options: StyleOptions): string => {
    const color = options.cor
        ? `color: ${options.cor};`
        : ''
    
    const textShadow = options.sombra
        ? `text-shadow: ${options.sombra};`
        : ''

    const background = options.fundo
        ? `background: ${options.fundo};`
        : ''

    const backgroudSize = options.fundoTamanho
        ? `background-size: ${options.fundoTamanho};`
        : ''

    const font = options.fonte
        ? `font-size: ${options.fonte};`
        : ''

    const fontWeight = options.peso
        ? `font-weight: ${options.peso};`
        : ''

    const margin = options.espaco
        ? `margin: ${options.espaco};`
        : ''

    const padding = options.preenchimento
        ? `padding: ${options.preenchimento};`
        : ''

    const whiteSpace = options.formatacao
        ?  `white-space: ${options.formatacao};`
        : ''

    const textAlign = options.alinhamento
        ? `text-align: ${options.alinhamento};`
        : ''

    const maxWidth = options.larguraMaxima
        ? `max-width: ${options.larguraMaxima};`
        : ''

    const height = options.altura
        ? `height: ${options.altura};`
        : ''

    const border = options.borda
        ? `border: ${options.borda};`
        : ''

    const borderBottom = options.bordaInferior
        ? `border: ${options.bordaInferior};`
        : ''

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
        maxWidth,
        height,
        border,
        borderBottom,
    ].join('')
}

export type WithStyleOptions<K extends string> = Partial<Record<StyledKey, Record<K, string>>>
export type Styles<K extends string> = Record<K, string | undefined>
export type WithStyle<K extends string, T extends WithStyleOptions<K>> = T & {
    styles: Styles<K>
}

export const buildWithStyle =
    <K extends string, T extends WithStyleOptions<string>>(options: T, _styles: K[]): WithStyle<K, T> => {
        const styleNames = Object.keys({
            ...(options.cor ?? {}),
            ...(options.sombra ?? {}),
            ...(options.fundo ?? {}),
            ...(options.fundoTamanho ?? {}),
            ...(options.fonte ?? {}),
            ...(options.peso ?? {}),
            ...(options.espaco ?? {}),
            ...(options.preenchimento ?? {}),
            ...(options.formatacao ?? {}),
            ...(options.alinhamento ?? {}),
            ...(options.larguraMaxima ?? {}),
            ...(options.altura ?? {}),
            ...(options.borda ?? {}),
            ...(options.bordaInferior ?? {}),
        }) as K[]

        return {
            ...options,
            styles: styleNames.reduce((styles, name) => {
                styles[name] = buildStyle({
                    cor: options.cor?.[name],
                    sombra: options.sombra?.[name],
                    fundo: options.fundo?.[name],
                    fundoTamanho: options.fundoTamanho?.[name],
                    fonte: options.fonte?.[name],
                    peso: options.peso?.[name],
                    espaco: options.espaco?.[name],
                    preenchimento: options.preenchimento?.[name],
                    formatacao: options.formatacao?.[name],
                    alinhamento: options.alinhamento?.[name],
                    larguraMaxima: options.larguraMaxima?.[name],
                    altura: options.altura?.[name],
                    borda: options.borda?.[name],
                    bordaInferior: options.bordaInferior?.[name],
                })
                return styles
            }, {} as Styles<K>)
        }
    }
