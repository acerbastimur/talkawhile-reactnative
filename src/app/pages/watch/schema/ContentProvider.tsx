import { Playphrase, PhrasesItem } from "../../../models/Playphrase";
import IContent from '../../../models/Content';
import ContentStore from '../../../stores/ContentStore'
import {toJS} from 'mobx'
import ModalStore from "../../../stores/ModalStore";
export default class ContentProvider {
    private content: IContent = ContentStore.content[ModalStore.selectedCardIndex]; // ! will be removed mock data as selected category

    constructor() {
      console.log("Content store " , toJS(this.content))
    }

    async  getDataFromApi(word: string): Promise<Playphrase> {
        let response = await fetch(`https://www.playphrase.me/api/v1/phrases/search?q=${word}`)
        let data:Playphrase = await response.json()
        return data;
    }

    public async getAllWordsContents(): Promise<PhrasesItem[]> {
        const allWordsContent = this.content.wordList.map(async (word, index) => {
           const currentWord: string = this.content.wordList[index];
          const contents: Playphrase = await this.getDataFromApi(
            currentWord,
          );
           contents.phrases.forEach(element => {
             element.word = word;
           });
          return contents.phrases;
        });
    
        const contents = await Promise.all(allWordsContent);
       var flattenContents = [];
    
        for (var i = 0; i < contents.length; i++) {
            flattenContents = flattenContents.concat(contents[i]);
        }
        var shuffledContents = flattenContents.sort(() => Math.random() - 0.5);
        console.log(shuffledContents);
         return shuffledContents;
      }
}