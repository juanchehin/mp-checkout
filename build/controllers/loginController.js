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
Object.defineProperty(exports, "__esModule", { value: true });
var SEED = require('../config/config').SEED;
class LoginController {
    // ========================================================
    // Login - usuario del sistema
    // ========================================================
    loginUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = req.body[0];
            const pass = req.body[1];
        });
    }
    // ==================================================
    //   Actualiza el estado de un cliente
    // ==================================================
    actualizaEstadoCliente(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const IdPersona = req.params.IdPersona;
        });
    }
}
const loginController = new LoginController;
exports.default = loginController;
