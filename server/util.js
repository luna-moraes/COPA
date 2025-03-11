"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.asset = exports.page = void 0;
const path_1 = __importDefault(require("path"));
const node_crypto_1 = __importDefault(require("node:crypto"));
const node_fs_1 = require("node:fs");
const mapFilePathToHash = {};
const page = (filename) => path_1.default.join(__dirname, '..', 'pages', filename + '.ejs');
exports.page = page;
const asset = (filename) => {
    const filePath = path_1.default.join(__dirname, '..', 'assets', filename);
    let hash;
    if (mapFilePathToHash[filePath]) {
        hash = mapFilePathToHash[filePath];
    }
    else {
        const content = (0, node_fs_1.readFileSync)(filePath);
        hash = node_crypto_1.default.createHash("md5").update(content).digest("hex").slice(0, 8);
        mapFilePathToHash[filePath] = hash;
    }
    const assetName = path_1.default.join('/', filename).replace(/\\/g, '/');
    return `${assetName}?v=${hash}`;
};
exports.asset = asset;
