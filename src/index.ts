import { SetupServer } from "./server";

enum ExitStatus {
    Failure = 1,
    Success = 0,
  }
  

(async (): Promise<void> => {
    try {
        const server = new SetupServer(process.env.PORT)
        await server.init();
        server.start();
    } catch (error) {
        console.timeLog(`App error: ${error}`)
        process.exit(ExitStatus.Failure)
    }
})();

