import { MainType } from '../types';
import Api from './routes/api';
import Joke from './routes/joke';

export enum endpoints {
    joke = "/random_joke",
}


export default class Main implements MainType {
    api = new Api('https://official-joke-api.appspot.com');
    joke = new Joke(this.api, endpoints.joke);
}