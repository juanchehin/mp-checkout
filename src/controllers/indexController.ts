import { Request, Response } from 'express';

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

    public webhook(req: Request, res: Response) {

        if (req.method === "POST") { 
            let body = ""; 
            req.on("data", chunk => {  
              body += chunk.toString();
            });
            req.on("end", () => {  
              console.log(body, "webhook response"); 
              res.end("ok");
            });
          }


        res.send("<html> <head>WebHook!</head><body><h1> /WebHook  </p></h1></body></html>");
    }

    

}

export const indexController = new IndexController;
export default indexController;