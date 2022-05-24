import { WebHookClient } from '@src/api/clients/webhook-client';
import axios from 'axios';
import { mockInsertWebHook } from '../mocks/gitMock';

jest.mock('axios');

describe('Beach webhook Api functional tets', () => {
  it('Webhook Client insert data', async () => {
    const mockAxios = axios as jest.Mocked<typeof axios>;
    mockAxios.post.mockResolvedValue(mockInsertWebHook);
    const webhook = new WebHookClient();
    const response = await webhook.sendWebHook(mockInsertWebHook);
    expect(response).toEqual(mockInsertWebHook);
  });
});
