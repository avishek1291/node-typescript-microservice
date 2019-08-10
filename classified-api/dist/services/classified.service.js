"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClassifiedService {
    constructor() {
        this.getAllClassifieds = () => {
            console.log('inside classified service');
            return new Promise((reject, resolve) => {
                return resolve({
                    "id": 1,
                    "title": "Room rent at new Town",
                    "rent": 2000,
                    "isAvialble": true
                });
            });
        };
    }
}
exports.classifiedService = new ClassifiedService();
//# sourceMappingURL=classified.service.js.map