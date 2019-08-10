import * as express from 'express';
import * as bodyparser from 'body-parser';

class App {
    public app : express.Application;
    public port: Number;
    constructor(){
     this.app = express();

     this.setExpressConfig();
    }

    private async setExpressConfig(){
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended : true}));
        this.app.use(express.static('public'));
        const { router }  =  await import('../routes');
        this.app.use('/api/v1', router);

    }
}

export default new App().app;