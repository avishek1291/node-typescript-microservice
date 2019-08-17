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
const bluebird = require("bluebird");
class App {
    constructor() {
        this.app = express();
        this.setExpressConfig();
        this.connectdb();
    }
    setExpressConfig() {
        return __awaiter(this, void 0, void 0, function* () {
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
            const result = yield mongoose.connect(`mongodb://avipoc:avipoc1291@ds163867.mlab.com:63867/classifieds`, { useNewUrlParser: true });
            console.log('connection result: ', result);
            return mongoose.connection.db;
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map