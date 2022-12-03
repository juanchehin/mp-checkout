import { Router } from 'express';

import indexController from '../controllers/indexController';

class IndexRoutes {

    public router: Router = Router();

    constructor() {
        console.log("its working MP")
        this.config();
    }

    config(): void {
        this.router.get('/', indexController.index);
        this.router.get('/success', indexController.success);
        this.router.get('/error', indexController.error);
        this.router.get('/pending', indexController.pending);
        this.router.post('/webhook', indexController.webhook);
    }

}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;