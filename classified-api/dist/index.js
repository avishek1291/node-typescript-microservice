"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HTTP = require("http");
const app_1 = require("./config/app");
const port = 8080;
HTTP.createServer(app_1.default).listen(port, () => console.log(`Server started at port ${port}`));
//# sourceMappingURL=index.js.map