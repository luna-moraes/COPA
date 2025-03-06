import fs from 'node:fs'
import fse from 'fs-extra'
import ejs from 'ejs'
import path from 'node:path'
import {content} from './config'

const INPUT_PAGE_DIR = 'pages'
const INPUT_PAGE = 'index.ejs'
const INPUT_ASSETS_DIR = 'assets'
const INPUT_ASSETS = ['img/', 'styles.css']

const OUTPUT_DIR = 'dist'
const OUTPUT_HTML = 'index.html'

async function build() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true })
    }

    const templateDirPath = path.resolve(__dirname, '..', INPUT_PAGE_DIR)
    const templatePath = path.join(templateDirPath, INPUT_PAGE)
    const outputPath = path.resolve(__dirname, '..', OUTPUT_DIR)
    const outputHtmlPath = path.join(outputPath, OUTPUT_HTML)
    
    const template = fs.readFileSync(templatePath, "utf8")
    const html = ejs.render(template, content, {
        views: [templateDirPath]
    })
    
    fs.writeFileSync(outputHtmlPath, html)
    console.log(`✔ Done: ${OUTPUT_HTML}`)
    
    for (const asset of INPUT_ASSETS) {
        const assetInputPath = path.resolve(__dirname, '..', INPUT_ASSETS_DIR, asset)
        const assetOutputPath = path.join(outputPath, asset)
        await fse.copy(assetInputPath, assetOutputPath)
        console.log(`✔ Done: ${assetOutputPath}`)
    }

    console.log('✔ Build Finished!')
}

build().catch(err => console.error(err))
