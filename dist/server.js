"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetupServer = void 0;
const core_1 = require("@overnightjs/core");
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
class SetupServer extends core_1.Server {
    constructor(port = process.env.PORT) {
        super();
        this.port = port;
    }
    init() {
        this.setupExpress();
    }
    setupExpress() {
        this.app.use(body_parser_1.default.json());
    }
    getApp() {
        return this.app;
    }
    start() {
        this.server = this.app.listen(this.port, () => {
            console.log('Server running on port: ' + this.port);
        });
    }
}
exports.SetupServer = SetupServer;
//# sourceMappingURL=server.js.map