import {resolve} from 'path'

export const page = (filename: string) => resolve(__dirname, '..', 'pages', filename + '.ejs')
