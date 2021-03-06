import { ENV } from './env';

export const isProduction = ENV === 'production';
export const isDebug = ENV === 'development';
export const apiEndpoint = isDebug ? 'http://192.168.100.100:3000' : 'http://localhost:3000';