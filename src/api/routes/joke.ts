import { ApiType, JokeType } from "../../types";


export default class Joke implements JokeType {
    constructor(apiInstance: ApiType, endpoint: string) {
        this.api = apiInstance;
        this.url = this.api.baseUrl + endpoint;
    }

    /**Props ************************/
    api: ApiType;
    url = "";

    /**Methods ************************/
    async getJoke() {
        try {
            const response = await this.api.get(this.url);
            return response;
        } catch (e) {
            return { error: e };
        }
    }
}