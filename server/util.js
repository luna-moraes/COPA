"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.page = void 0;
const path_1 = require("path");
const page = (filename) => (0, path_1.resolve)(__dirname, '..', 'pages', filename + '.ejs');
exports.page = page;
