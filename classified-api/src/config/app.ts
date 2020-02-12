import * as express from 'express';
import * as bodyparser from 'body-parser';
import mongoose = require('mongoose');
import AutoIncrementFactory = require('mongoose-sequence');
import * as bluebird from 'bluebird';
import * as morgan from  'morgan';
import * as expressRequestId from 'express-request-id';
class App {
    public app : express.Application;
    public autoIncrement: AutoIncrementFactory
    public port: Number;
    public db;
    loggerFormat = ':id [:date[web]]" :method :url" :status :responsetime'
    constructor(){
    
     this.app = express();
    //  morgan.token('id', () => getId(req) {
    //     return req.id
    // });
     this.setExpressConfig();

     this.connectdb();
    }

    private async setExpressConfig(){
        // this.app.use(expressRequestId);
        // this.app.use(morgan(this.loggerFormat, {
        //     skip: function (req, res) {
        //         return res.statusCode < 400
        //     },
        //     stream: process.stderr
        // }));
        
        // this.app.use(morgan(this.loggerFormat, {
        //     skip: function (req, res) {
        //         return res.statusCode >= 400
        //     },
        //     stream: process.stdout
        // }));
        this.app.use(morgan('dev'))
        this.app.use(bodyparser.json());
        this.app.use(bodyparser.urlencoded({extended : true}));
        this.app.use(express.static('public'));
        const { router }  =  await import('../routes');
        this.app.use('/api/v1', router);

    }

    private async connectdb(){
        mongoose.Promise = bluebird;
        mongoose.set('debug', true);
        mongoose.connection.on('error', (error) => {
            console.log('error in database connection', error);
            process.exit(1);
        })
// mongodb://<dbuser>:<dbpassword>@ds163867.mlab.com:63867/classifieds
        const connection = await mongoose.connect(`mongodb+srv://medAppUser:medApp123@cluster0-b0rjo.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true });
        this.autoIncrement = AutoIncrementFactory(connection);
       //  console.log('connection result: ', connection);
        return mongoose.connection.db;
    }
}

export default new App().app;