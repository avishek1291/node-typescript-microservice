"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const AutoIncrementFactory = require("mongoose-sequence");
const bluebird = require("bluebird");
class App {
    constructor() {
        this.loggerFormat = ':id [:date[web]]" :method :url" :status :responsetime';
        this.app = express();
        //  morgan.token('id', () => getId(req) {
        //     return req.id
        // });
        this.setExpressConfig();
        this.connectdb();
    }
    setExpressConfig() {
        return __awaiter(this, void 0, void 0, function* () {
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
            this.app.use(bodyparser.json());
            this.app.use(bodyparser.urlencoded({ extended: true }));
            this.app.use(express.static('public'));
            const { router } = yield Promise.resolve().then(() => require('../routes'));
            this.app.use('/api/v1', router);
        });
    }
    connectdb() {
        return __awaiter(this, void 0, void 0, function* () {
            mongoose.Promise = bluebird;
            mongoose.connection.on('error', (error) => {
                console.log('error in database connection', error);
                process.exit(1);
            });
            // mongodb://<dbuser>:<dbpassword>@ds163867.mlab.com:63867/classifieds
            const connection = yield mongoose.connect(`mongodb://avishek.cl.dev:Mustane%402019@ds133077.mlab.com:33077/classifieds`, { useNewUrlParser: true });
            this.autoIncrement = AutoIncrementFactory(connection);
            //  console.log('connection result: ', connection);
            return mongoose.connection.db;
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map