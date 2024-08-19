import z from 'zod'

export const EnvSchema = z.object({
    port: z.string().min(1)
})
