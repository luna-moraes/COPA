export interface StyleOptions {
    cor?: string
    sombra?: string
    fundo?: string
    fonte?: string
    peso?: string
    espaco?: string
    preenchimento?: string
}

export const buildStyle = (options: StyleOptions): string => {
    const color = options.cor
        ? `color: ${options.cor};`
        : ''
    
    const textShadow = options.sombra
        ? `text-shadow: ${options.sombra};`
        : ''

    const backgroundColor = options.fundo
        ? `background-color: ${options.fundo};`
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
    
    return [
        color,
        textShadow,
        backgroundColor,
        font,
        fontWeight,
        margin,
        padding,
    ].join('')
}

export interface WithStyleOptions<K extends string> {
    cor?: Record<K, string>
    sombra?: Record<K, string>
    fundo?: Record<K, string>
    fonte?: Record<K, string>
    peso?: Record<K, string>
    espaco?: Record<K, string>
    preenchimento?: Record<K, string>
}

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
            ...(options.fonte ?? {}),
            ...(options.peso ?? {}),
            ...(options.espaco ?? {}),
            ...(options.preenchimento ?? {}),
        }) as K[]

        return {
            ...options,
            styles: styleNames.reduce((styles, name) => {
                styles[name] = buildStyle({
                    cor: options.cor?.[name],
                    sombra: options.sombra?.[name],
                    fundo: options.fundo?.[name],
                    fonte: options.fonte?.[name],
                    peso: options.peso?.[name],
                    espaco: options.espaco?.[name],
                    preenchimento: options.preenchimento?.[name],
                })
                return styles
            }, {} as Styles<K>)
        }
    }
