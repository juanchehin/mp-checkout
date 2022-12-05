import { Request, Response } from 'express';
const mercadopago = require ('mercadopago');

class IndexController {

    public index(req: Request, res: Response) {
        res.send("<html> <head>Index!</head><body><h1>Esta es la pagina en la ruta / </p></h1></body></html>");
    }

    public error(req: Request, res: Response) {
        res.send("<html> <head>Error!</head><body><h1>Esta es la pagina en la ruta /error </p></h1></body></html>");
    }

    public pending(req: Request, res: Response) {
        res.send("<html> <head>pending!</head><body><h1>Esta es la pagina en la ruta /pending </p></h1></body></html>");
    }

    public success(req: Request, res: Response) {
        res.send("<html> <head>success!</head><body><h1>Esta es la pagina en la ruta /success </p></h1></body></html>");
    }

    public async webhook(req: Request, res: Response) {

        console.log("pasa por webhook req.query : ",req.query)

        console.log("pasa por webhook req.query.type type : ",req.query.type)
        console.log("pasa por webhook req.query.data : ",req.query['data.id'])
        // console.log("pasa por req : ",req)

        if (req.query.type === 'payment') { // hay otros, nos importa solo payment
          const paymentId = req.query['data.id']; // ID de payment en MercadoPago

          console.log("pasa por webhook paymentId : ",paymentId)

          const url = "https://api.mercadopago.com/v1/payments/" + paymentId;

          console.log("url es : ",url)

          const request = await axios.get(url, {
            // hacemos el POST a la url que declaramos arriba, con las preferencias
                  headers: {
                    Authorization: 'Bearer ' + process.env.MP_ACCESS_TOKEN_TEST //the token is a variable which holds the token
                  }
            });

            console.log("request: 48 ",request);
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
    }

    public ipn(req: Request, res: Response) {

        console.log("pasa por ipn")
        console.log("pasa por req.params : ",req.params)
        console.log("pasa por req.params type : ",req.params.type)
        // console.log("pasa por ipn req.method : ",req.method)
        // console.log("pasa por ipn req : ",req)
        // console.log("pasa por ipn req.query.type : ",req.query.type)
        
        if (req.params.type === 'payment') { // hay otros, nos importa solo payment

          console.log("pasa if , req.params.data : ",req.params.data)
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

export const indexController = new IndexController;
export default indexController;