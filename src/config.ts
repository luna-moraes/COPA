import {resolve} from 'node:path'
import {readFileSync} from 'node:fs'

import yaml from 'js-yaml'

import {EnvModel} from './model/env-model'
import {ContentModel} from './model/content-model'

export const env = EnvModel.parse(process.env)
export const content = ContentModel.parse(
    yaml.load(readFileSync(
        resolve(__dirname, '..', 'resources', 'content.yaml'),
        'utf8',
    ))
)
export const publicPath = resolve (__dirname, '..', 'assets')
