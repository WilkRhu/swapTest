import { InternalError } from "./internal-error";

export class GitHubApiRequestError extends InternalError {
    constructor(message: string) {
        const internalMessage = `Inexpected error when trying to communicate to Api GitHub`;
        super(`${internalMessage}: ${message}`)
    }
}