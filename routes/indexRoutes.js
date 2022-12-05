"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexController_1 = __importDefault(require("../controllers/indexController"));
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        console.log("its working MP");
        this.config();
    }
    config() {
        this.router.get('/', indexController_1.default.index);
        this.router.get('/success', indexController_1.default.success);
        this.router.get('/error', indexController_1.default.error);
        this.router.get('/pending', indexController_1.default.pending);
        this.router.post('/webhook', indexController_1.default.webhook);
        this.router.post('/ipn', indexController_1.default.ipn);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
