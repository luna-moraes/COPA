"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fs_1 = __importDefault(require("node:fs"));
const fs_extra_1 = __importDefault(require("fs-extra"));
const ejs_1 = __importDefault(require("ejs"));
const node_path_1 = __importDefault(require("node:path"));
const config_1 = require("./config");
const util_1 = require("./util");
const INPUT_PAGE_DIR = 'pages';
const INPUT_PAGE = 'index.ejs';
const INPUT_ASSETS_DIR = 'assets';
const INPUT_ASSETS = ['img/', 'styles.css', 'robots.txt', 'sitemap.xml'];
const OUTPUT_DIR = 'dist';
const OUTPUT_HTML = 'index.html';
function build() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!node_fs_1.default.existsSync(OUTPUT_DIR)) {
            node_fs_1.default.mkdirSync(OUTPUT_DIR, { recursive: true });
        }
        const templateDirPath = node_path_1.default.join(__dirname, '..', INPUT_PAGE_DIR);
        const templatePath = node_path_1.default.join(templateDirPath, INPUT_PAGE);
        const outputPath = node_path_1.default.join(__dirname, '..', OUTPUT_DIR);
        const outputHtmlPath = node_path_1.default.join(outputPath, OUTPUT_HTML);
        const template = node_fs_1.default.readFileSync(templatePath, "utf8");
        const html = ejs_1.default.render(template, Object.assign(Object.assign({}, config_1.content), { asset: util_1.asset }), { views: [templateDirPath] });
        node_fs_1.default.writeFileSync(outputHtmlPath, html);
        console.log(`✔ Done: ${OUTPUT_HTML}`);
        for (const asset of INPUT_ASSETS) {
            const assetInputPath = node_path_1.default.join(__dirname, '..', INPUT_ASSETS_DIR, asset);
            const assetOutputPath = node_path_1.default.join(outputPath, asset);
            yield fs_extra_1.default.copy(assetInputPath, assetOutputPath);
            console.log(`✔ Done: ${assetOutputPath}`);
        }
        console.log('✔ Build Finished!');
    });
}
build().catch(err => console.error(err));
