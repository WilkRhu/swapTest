
import { connect as mongooseConnect, connection } from 'mongoose';
import { App } from '../../config/export-envs';

export const connect = async (): Promise<void> => {
  const connect = await mongooseConnect(`${App.urlDatabase}`);
  connect ? console.log('Database connect') : console.log('Database no connect')
};

export const close = (): Promise<void> => connection.close();