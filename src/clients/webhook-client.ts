import axios, { AxiosStatic } from 'axios';
import { ClientRequestError } from '../../src/utils/errors/cliente-error';
import { App } from '../config/export-envs';

export class WebHookClient {
  constructor(protected request: AxiosStatic = axios) {}

  public async sendWebHook(data: object) {
    try {
      const response = await this.request.post(`${App.webhook}`, data);
      return response;
    } catch (error) {
      throw new ClientRequestError(`${error}`)
    }
  }
}
