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

     this.connectdb();
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
        mongoose.connection.on('error', (error) => {
            console.log('error in database connection', error);
            process.exit(1);
        })
// mongodb://<dbuser>:<dbpassword>@ds163867.mlab.com:63867/classifieds
        const result = await mongoose.connect(`mongodb://avipoc:avipoc1291@ds163867.mlab.com:63867/classifieds`, { useNewUrlParser: true });
        console.log('connection result: ', result);
        return mongoose.connection.db;
    }
}

export default new App().app;