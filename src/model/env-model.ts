import z from 'zod'

export const EnvModel = z.object({
    port: z.string().regex(/\d+/, '`port` must be a positive integer'),
})
