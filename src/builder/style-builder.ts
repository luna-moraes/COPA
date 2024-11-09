export interface StyleOptions {
    cor?: string
    sombra?: string
    fundo?: string
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
    
    return [color, textShadow, backgroundColor].join('')
}

export interface WithStyleOptions<K extends string> {
    cor?: Record<K, string>
    sombra?: Record<K, string>
    fundo?: Record<K, string>
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
        }) as K[]

        return {
            ...options,
            styles: styleNames.reduce((styles, name) => {
                styles[name] = buildStyle({
                    cor: options.cor?.[name],
                    sombra: options.sombra?.[name],
                    fundo: options.fundo?.[name]
                })
                return styles
            }, {} as Styles<K>)
        }
    }
