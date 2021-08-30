import axios from "axios";
import md5 from "md5";

export const publicKey = '[sua publicKey]';
const privateKey = '[sua privateKey]';
export const time = Number(new Date());
export const hash = md5(time + privateKey + publicKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts: time,
    apikey: publicKey,
    hash: hash
  }
});

export default api;
