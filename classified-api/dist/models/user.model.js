"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    first_name: { type: String },
    last_name: { type: String },
    phone_number: { type: Number },
    city_code: { type: Number },
    country_code: { type: Number },
    address_line_1: { type: String },
    address_line_2: { type: String },
    password_encrpt: { type: String },
    isActive: { type: Boolean }
});
exports.default = mongoose.model('User', userSchema);
//# sourceMappingURL=user.model.js.map