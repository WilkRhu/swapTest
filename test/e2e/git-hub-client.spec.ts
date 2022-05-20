import { GitHubApi } from '@src/clients/git-hub-api'
import axios from 'axios'
import { gitMockRepo } from '../mocks/gitMock'
jest.mock('axios')

describe('Beach gitHub Api functional tets', () => {
    it('GitHub Client', async () => {
        const mockEnv = {userName: "WilkRhu", repo: "mestreweb"} 
        const mockAxios = axios as jest.Mocked<typeof axios>
        mockAxios.get.mockResolvedValue({ data: gitMockRepo })
        const gitHub = new GitHubApi(axios);
        const response = await gitHub.get_repository(mockEnv.userName, mockEnv.repo)
        expect(response).toEqual({name:"WilkRhu", repository:  "mestreweb" })
    })
})