import path from 'path'
import crypto from 'node:crypto'
import {readFileSync} from 'node:fs'

const mapFilePathToHash: Record<string, string> = {}

export const page = (filename: string) => path.join(__dirname, '..', 'pages', filename + '.ejs')

export const asset = (filename: string): string => {
    const filePath = path.join(__dirname, '..', 'assets', filename)

    let hash: string

    if (mapFilePathToHash[filePath]) {
        hash = mapFilePathToHash[filePath]
    } else {
        const content = readFileSync(filePath)
        hash = crypto.createHash("md5").update(content).digest("hex").slice(0, 8)
        mapFilePathToHash[filePath] = hash
    }

    const assetName = path.join('/', filename).replace(/\\/g, '/')

    return `${assetName}?v=${hash}`
}
