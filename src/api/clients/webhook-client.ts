import axios, { AxiosStatic } from "axios";
import { App } from "../../../config/export-envs";

export class WebHookClient {
    constructor(protected request: AxiosStatic = axios) {}

    public async insertWebHook(data: object) {
        try {
            const response = await this.request.post(`${App.webhook}`, data)
            return response
        } catch (error) {
            throw new Error("Error insert webhook!");
        }
    }

}