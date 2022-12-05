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
exports.indexController = void 0;
const axios = require("axios");
var https = require('follow-redirects').https;
var fs = require('fs');
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
        return __awaiter(this, void 0, void 0, function* () {
            console.log("pasa por webhook req.query : ", req.query);
            console.log("pasa por webhook req.query.type type : ", req.query.type);
            console.log("pasa por webhook req.query.data : ", req.query['data.id']);
            // console.log("pasa por req : ",req)
            if (req.query.type === 'payment') { // hay otros, nos importa solo payment
                const paymentId = req.query['data.id']; // ID de payment en MercadoPago
                console.log("pasa por webhook paymentId : ", paymentId);
                const url = "https://api.mercadopago.com/v1/payments/" + paymentId;
                console.log("url es : ", url);
                var options = {
                    'method': 'GET',
                    'hostname': 'api.mercadopago.com',
                    'path': '/v1/payments/' + paymentId,
                    'headers': {
                        'Authorization': 'Bearer ' + process.env.MP_ACCESS_TOKEN_TEST
                    },
                    'maxRedirects': 20
                };
                var request = https.request(options, function (res) {
                    var body = '';
                    res.on('data', function (d) {
                        body += d;
                    });
                    res.on('end', function () {
                        // Data reception is done, do whatever with it!
                        var parsed = JSON.parse(body);
                        console.log('endSTATUS: ' + parsed.status);
                    });
                });
                // request.end();
            }
            // Documentación de pagos: https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/
            //   mercadopago.payments.get(paymentId).then((error: any, payment: any) => {
            //     // Obtenemos los datos del pago desde MP
            //     const orderId = payment.external_reference; // esto es el ID de la orden que especificamos en la linea 15
            //     console.log("pasa por mercadopago.payments orderId : ",orderId)
            //     // buscamos en nuestra db la orden
            //     db.orders.find(orderId).then((order) => {
            //       if (order.totalPrice === payment.transaction_amount) { // para que no se nos hagan los vivos XD
            //         order.status = payment.status; // hay muchos estados, revisa https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/
            //         // comprobamos que sea "approved" y que no hayamos entregado ya el pedido... recuerda que "order" es algo que
            //         // debes implementar tu, que podría tener un cambpo "delivered" para saber si ya hiciste entrega o no del
            //         // pedido
            //         if (order.status === 'approved' && !order.delivered) {
            //           deliverOrder(order); // función ficticia que debes implementar... es básicamente "entregar" el producto
            //         }
            //       }
            //     });
            //   });
            // }
            // res.send("<html> <head>WebHook!</head><body><h1> /WebHook  </p></h1></body></html>");
        });
    }
    ipn(req, res) {
        console.log("pasa por ipn");
        console.log("pasa por req.params : ", req.params);
        console.log("pasa por req.params type : ", req.params.type);
        // console.log("pasa por ipn req.method : ",req.method)
        // console.log("pasa por ipn req : ",req)
        // console.log("pasa por ipn req.query.type : ",req.query.type)
        if (req.params.type === 'payment') { // hay otros, nos importa solo payment
            console.log("pasa if , req.params.data : ", req.params.data);
            // const paymentId = req.params.data.id; // ID de payment en MercadoPago
            // Documentación de pagos: https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/
            // mercadopago.payments.get(paymentId).then((error: any, payment: any) => {
            //   // Obtenemos los datos del pago desde MP
            //   const orderId = payment.external_reference; // esto es el ID de la orden que especificamos en la linea 15
            //   // buscamos en nuestra db la orden
            //   db.orders.find(orderId).then((order: any) => {
            //     if (order.totalPrice === payment.transaction_amount) { // para que no se nos hagan los vivos XD
            //       order.status = payment.status; // hay muchos estados, revisa https://www.mercadopago.cl/developers/es/reference/payments/_payments_search/get/
            //       // comprobamos que sea "approved" y que no hayamos entregado ya el pedido... recuerda que "order" es algo que
            //       // debes implementar tu, que podría tener un cambpo "delivered" para saber si ya hiciste entrega o no del
            //       // pedido
            //       if (order.status === 'approved' && !order.delivered) {
            //         deliverOrder(order); // función ficticia que debes implementar... es básicamente "entregar" el producto
            //       }
            //     }
            //   });
            // });
        }
    }
}
exports.indexController = new IndexController;
exports.default = exports.indexController;
