import { Router } from 'express';
import checkoutController from '../controllers/checkoutController';

class CheckoutRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {

        // 
        // this.router.get('/datos-comprar-ahora/:pIdPersona/:pIdProducto',checkoutController.datosComprarAhora);
        // this.router.post('/confirmar-compra',checkoutController.confirmarCompra);
        // 
        this.router.post("/payment/new",checkoutController.getMercadoPagoLink); 
        this.router.post("/webhook",checkoutController.webhook); 


    }

}

const checkoutRoutes = new CheckoutRoutes();
export default checkoutRoutes.router;