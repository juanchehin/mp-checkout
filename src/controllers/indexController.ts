import { Request, Response } from 'express';

class IndexController {

    public index(req: Request, res: Response) {
        res.json({text: 'Its working MP 2'});
    }

}

export const indexController = new IndexController;
export default indexController;