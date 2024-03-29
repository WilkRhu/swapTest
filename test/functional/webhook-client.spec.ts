import axios from 'axios';
import { WebHookClient } from '../../src/clients/webhook-client';
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
