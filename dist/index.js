"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
var ExitStatus;
(function (ExitStatus) {
    ExitStatus[ExitStatus["Failure"] = 1] = "Failure";
    ExitStatus[ExitStatus["Success"] = 0] = "Success";
})(ExitStatus || (ExitStatus = {}));
(async () => {
    try {
        const server = new server_1.SetupServer(process.env.PORT);
        await server.init();
        server.start();
    }
    catch (error) {
        console.log(`App error: ${error}`);
        process.exit(ExitStatus.Failure);
    }
})();
//# sourceMappingURL=index.js.map