import {resolve} from 'node:path'
import {readFileSync} from 'node:fs'

import dotenv from 'dotenv'
import yaml from 'js-yaml'

import {EnvModel} from './model/env-model'
import {ContentModel} from './model/content-model'

dotenv.config()

export const env = EnvModel.parse(process.env)
export const content = ContentModel.parse(
    yaml.load(readFileSync(
        resolve(__dirname, '..', 'resources', 'content.yaml'),
        'utf8',
    ))
)
export const publicPath = env.envName === 'PROD'
    ? resolve(__dirname, '..', 'dist')
    : resolve (__dirname, '..', 'assets')
