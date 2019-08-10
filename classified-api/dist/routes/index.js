"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const classified_route_1 = require("./classified.route");
const router = express_1.Router();
exports.router = router;
router.use('/classified', classified_route_1.default);
//# sourceMappingURL=index.js.map