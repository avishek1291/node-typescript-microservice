"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    id: { type: Number, unique: true },
    first_name: { type: String, unique: false },
    last_name: { type: String, unique: false },
    phone_number: { type: Number, unique: false },
    city_code: { type: Number, unique: false },
    country_code: { type: Number, unique: false },
    address_line_1: { type: String, unique: false },
    address_line_2: { type: String, unique: false },
    user_name: { type: String, unique: true },
    password_encrpt: { type: String, unique: true },
    isActive: { type: Boolean, unique: true }
});
exports.default = mongoose.model('userSchema', userSchema);
//# sourceMappingURL=user.model.js.map