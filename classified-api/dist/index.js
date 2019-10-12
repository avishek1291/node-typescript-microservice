"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const port = 8080;
// HTTP.createServer(app).listen( port, () => console.log(`Server started at port ${port}`));
app_1.default.listen(port, () => console.log(`Server started at port ${port}`));
//# sourceMappingURL=index.js.map