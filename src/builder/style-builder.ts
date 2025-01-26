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
    | 'largura'
    | 'larguraMaxima'
    | 'altura'
    | 'borda'
    | 'bordaInferior'
    | 'espacamento'
    | 'opacidadeFundo'

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

    const width = options.largura
        ? `width: ${options.largura};`
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
        ? `border-bottom: ${options.bordaInferior};`
        : ''

    const lineHeight = options.espacamento
        ? `line-height: ${options.espacamento};`
        : ''

    const backgroudBlendMode = options.opacidadeFundo
        ? `background-blend-mode: ${options.opacidadeFundo};`
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
        width,
        maxWidth,
        height,
        border,
        borderBottom,
        lineHeight,
        backgroudBlendMode,
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
            ...(options.largura ?? {}),
            ...(options.larguraMaxima ?? {}),
            ...(options.altura ?? {}),
            ...(options.borda ?? {}),
            ...(options.bordaInferior ?? {}),
            ...(options.espacamento ?? {}),
            ...(options.opacidadeFundo ?? {}),
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
                    largura: options.largura?.[name],
                    larguraMaxima: options.larguraMaxima?.[name],
                    altura: options.altura?.[name],
                    borda: options.borda?.[name],
                    bordaInferior: options.bordaInferior?.[name],
                    espacamento: options.espacamento?.[name],
                    opacidadeFundo: options.opacidadeFundo?.[name],
                })
                return styles
            }, {} as Styles<K>)
        }
    }
