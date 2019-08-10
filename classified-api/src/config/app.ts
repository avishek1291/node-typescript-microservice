import * as express from 'express';
import * as bodyparser from 'body-parser';
import mongoose = require('mongoose');
import * as bluebird from 'bluebird';
class App {
    public app : express.Application;
    public port: Number;
    public db;
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

    private async connectdb(){
        mongoose.Promise = bluebird;
        mongoose.connection.on('error', () => {
            console.log('error in database connection');
            process.exit(1);
        })

        await mongoose.connect('url', { useMongoClient: true});
        return mongoose.connection.db;
    }
}

export default new App().app;