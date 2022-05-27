
import { connect as mongooseConnect, connection } from 'mongoose';
import { App } from './config/export-envs';


export const connect = async (): Promise<void> => {
  await mongooseConnect(`${App.urlDatabase}`);
};

export const close = (): Promise<void> => connection.close();