import IContent from "../../../models/Content";
import ContentStore from "../../../stores/ContentStore";
import ContentProvider from './ContentProvider';
import { Playphrase } from "../../../models/Playphrase";
export default class Player {

    private learningWordIndex: number = 0;
    private content: IContent = ContentStore.content[0]; // ! will be removed mock data as selected category
    private contentProvider: ContentProvider = new ContentProvider();
    private allWordsContents: Playphrase[] = null;
    constructor() {
        console.log("Player initialized");
    }


    public async main() {
        this.allWordsContents = await this.getAllWordsContents();
        console.log(this.allWordsContents);
    }

    private async getAllWordsContents(): Promise<Playphrase[]> {
        const allWordsContent = this.content.wordList.map(async (word, index) => {
            const currentWord: string = this.content.wordList[index];
            const contents: Playphrase = await this.contentProvider.getDataFromApi(currentWord);
            return contents;
        });

        const contents = await Promise.all(allWordsContent);
        contents.forEach((element, index) => {
            contents[index] = { ...contents[index], lastWorked: 0 }
        })
        return contents;
    }


    getCurrentVideoUrl(): string {
        const currentPhrase = this.allWordsContents[this.learningWordIndex]
        return currentPhrase.phrases[currentPhrase.lastWorked]["video-url"];
    }

    getCurrentVideoSubtitle(): string {
        const currentPhrase = this.allWordsContents[this.learningWordIndex]
        return currentPhrase.phrases[currentPhrase.lastWorked].text;
    }
}