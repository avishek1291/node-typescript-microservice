"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("./user.route");
const router = express_1.Router();
exports.router = router;
router.use('/classified', user_route_1.default);
//# sourceMappingURL=index.js.map