import z from 'zod'

export const EnvModel = z.object({
    port: z.string().regex(/\d+/, '`port` must be a positive integer'),
    envName: z.string().regex(/^(DEV|PROD)$/, '`envName` must be "DEV" or "PROD"'),
    proxyHtml: z.string().optional(),
})
