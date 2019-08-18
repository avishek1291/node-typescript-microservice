"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_route_1 = require("./user.route");
const post_route_1 = require("./post.route");
const router = express_1.Router();
exports.router = router;
router.use('/user', user_route_1.default);
router.use('/post', post_route_1.default);
//# sourceMappingURL=index.js.map