import { GitHubApiClient } from '@src/api/clients/git-hub-api';
import axios from 'axios';
import { gitContributors, gitIssues, gitMockRepo } from '../mocks/gitMock';

jest.mock('axios');

describe('Beach gitHub Api functional tets', () => {
  it('GitHub Client return user and repository', async () => {
    const mockEnv = { userName: 'Fulano', repo: 'testRepository' };
    const mockAxios = axios as jest.Mocked<typeof axios>;
    mockAxios.get.mockResolvedValue({ data: gitMockRepo });
    const gitHub = new GitHubApiClient(axios);
    const response = await gitHub.get_repository(
      mockEnv.userName,
      mockEnv.repo,
    );
    expect(response).toEqual({ user: 'Fulano', repository: 'testRepository' });
  });

  it('GitHub Client return issues of repository', async () => {
    const mockEnv = { userName: 'Fulano', repo: 'testRepository' };
    const mockAxios = axios as jest.Mocked<typeof axios>;
    mockAxios.get.mockResolvedValue({ data: gitIssues });
    const gitHub = new GitHubApiClient(axios);
    const response = await gitHub.get_issues(
      mockEnv.userName,
      mockEnv.repo,
    );
    expect(Object.keys(response[0])).toEqual(['title', 'author', 'labels']);
  });

  it('GitHub Client return issues of repository', async () => {
    const mockEnv = { userName: 'Fulano', repo: 'testRepository' };
    const mockAxios = axios as jest.Mocked<typeof axios>;
    mockAxios.get.mockResolvedValue({ data: gitContributors });
    const gitHub = new GitHubApiClient(axios);
    const response = await gitHub.get_contributors(
      mockEnv.userName,
      mockEnv.repo,
    );
    expect(response).toEqual({
      contributors: [
        { name: 'Fulano1', qt_commits: 2 },
        { name: 'Fulano2', qt_commits: 1 },
      ],
    });
  });
});
