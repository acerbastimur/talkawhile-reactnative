import { Playphrase } from "../../../models/Playphrase";

export default class ContentProvider {
    constructor() {
    }

    async  getDataFromApi(word: string): Promise<Playphrase> {
        let response = await fetch(`https://www.playphrase.me/api/v1/phrases/search?q=${word}`)
        let data = await response.json()
        return data;
    }
}