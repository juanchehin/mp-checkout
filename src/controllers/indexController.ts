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

        console.log("pasa por webhook")
        console.log("pasa por req.method : ",req.method)
        console.log("pasa por req : ",req)

        if (req.method === "POST") { 
            console.log("pasa por POST : ")
            let body = ""; 
            req.on("data", chunk => {  
              body += chunk.toString();
              console.log("body 1 ",body)
            });
            req.on("end", () => {  
                console.log("pasa por emd  2 : ")
              console.log(body, "webhook response"); 
              res.end("ok");
            });
          }


        res.send("<html> <head>WebHook!</head><body><h1> /WebHook  </p></h1></body></html>");
    }

    public ipn(req: Request, res: Response) {

        console.log("pasa por ipn")
        console.log("pasa por req.params : ",req.params)
        // console.log("pasa por ipn req.method : ",req.method)
        // console.log("pasa por ipn req : ",req)
        // console.log("pasa por ipn req.query.type : ",req.query.type)
        

        if (req.method === "POST") { 
            console.log("pasa ipn por POST : ")
            let body = ""; 
            req.on("data", chunk => {  
              body += chunk.toString();
              console.log("body ipn 1 ",body)
            });
            req.on("end", () => {  
                console.log("pasa por ipn emd  2 : ")
              console.log(body, "webhook response"); 
              res.end("ok");
            });
          }
    }

    

}

export const indexController = new IndexController;
export default indexController;