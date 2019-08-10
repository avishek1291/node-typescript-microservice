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
const http_status_code_1 = require("http-status-code");
class ClassifiedController {
    getClassified(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('inside classified controller');
                // const response = await classifiedService.getAllClassifieds()
                // console.log('service response', response)
                res.json({
                    "id": 1,
                    "title": "Room rent at new Town",
                    "rent": 2000,
                    "isAvialble": true
                }).status(http_status_code_1.OK).send();
            }
            catch (e) {
                next(e);
            }
        });
    }
}
exports.classifiedController = new ClassifiedController();
//# sourceMappingURL=classified.controller.js.map