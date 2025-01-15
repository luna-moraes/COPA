"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicPath = exports.content = exports.env = void 0;
const node_path_1 = require("node:path");
const node_fs_1 = require("node:fs");
const js_yaml_1 = __importDefault(require("js-yaml"));
const env_model_1 = require("./model/env-model");
const content_model_1 = require("./model/content-model");
exports.env = env_model_1.EnvModel.parse(process.env);
exports.content = content_model_1.ContentModel.parse(js_yaml_1.default.load((0, node_fs_1.readFileSync)((0, node_path_1.resolve)(__dirname, '..', 'resources', 'content.yaml'), 'utf8')));
exports.publicPath = exports.env.envName === 'PROD'
    ? (0, node_path_1.resolve)(__dirname, '..', 'dist')
    : (0, node_path_1.resolve)(__dirname, '..', 'assets');
