import { DbConnection } from "../../src/config/connection-typeorm";
import { GitHubService } from "../../src/services/git-services";
import { mockInsertWebHook } from "../mocks/gitMock";
jest.setTimeout(5000)

describe("Test GitHubClient", () => {
    let connection = new DbConnection();
    let gitHubService = new GitHubService();
    let gitHubCreate = ''

    beforeAll(async () => {
        await connection.connectionFunction()
        gitHubCreate = await gitHubService.saveOnDatabaseEnvWebHook(mockInsertWebHook)
    })
    it("Return success create", async () => {
        console.log(gitHubCreate)
    })
})