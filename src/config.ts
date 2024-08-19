import dotenv from 'dotenv'
import {resolve} from 'path'
import {EnvSchema} from './validate/env'

dotenv.config()

export const env = EnvSchema.parse(process.env)
export const dist = resolve(__dirname, '..', 'dist')
