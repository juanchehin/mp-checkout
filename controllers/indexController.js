"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.send("<html> <head>Index!</head><body><h1>Esta es la pagina en la ruta / </p></h1></body></html>");
    }
    error(req, res) {
        res.send("<html> <head>Error!</head><body><h1>Esta es la pagina en la ruta /error </p></h1></body></html>");
    }
    pending(req, res) {
        res.send("<html> <head>pending!</head><body><h1>Esta es la pagina en la ruta /pending </p></h1></body></html>");
    }
    success(req, res) {
        res.send("<html> <head>success!</head><body><h1>Esta es la pagina en la ruta /success </p></h1></body></html>");
    }
    webhook(req, res) {
        console.log("pasa por webhook");
        console.log("pasa por req.method : ", req.method);
        console.log("pasa por req : ", req);
        if (req.method === "POST") {
            console.log("pasa por POST : ");
            let body = "";
            req.on("data", chunk => {
                body += chunk.toString();
                console.log("body 1 ", body);
            });
            req.on("end", () => {
                console.log("pasa por POST : ");
                console.log(body, "webhook response");
                res.end("ok");
            });
        }
        res.send("<html> <head>WebHook!</head><body><h1> /WebHook  </p></h1></body></html>");
    }
}
exports.indexController = new IndexController;
exports.default = exports.indexController;
