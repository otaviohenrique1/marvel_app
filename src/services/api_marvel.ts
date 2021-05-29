import axios from "axios";
import md5 from "md5";

export const publicKey = 'da51eb2da6eeb9a915df90822003e27c';
const privateKey = '86371ef198197d8d497240c62452ba4292267d38';
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