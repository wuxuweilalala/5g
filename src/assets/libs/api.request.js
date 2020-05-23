import HttpRequest from './axios';
import config from '../config/index';
const baseUrl = process.env.NODE_ENV === 'production' ? config.baseUrl.idc : config.baseUrl.dev;

const axios = new HttpRequest(baseUrl);
export default axios;
