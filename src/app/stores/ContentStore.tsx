import {observable, action, autorun, reaction, when} from 'mobx';
import IContent from '../models/Content';
import {PhrasesItem} from '../models/Playphrase';
import ContentProvider from '../pages/watch/schema/ContentProvider';
const data = require('../../assets/other/content.json');

class ContentStore {
  @observable content: Array<IContent> = null;
  @observable phrases: PhrasesItem[];
  @observable currentPhrase: PhrasesItem = null;
  @observable showTalkDialog = false;
  constructor() {
    console.log('content store initialized');
    this.content = data;
    console.log(data);
  }

  @action  getAllPhrases = async () => {
    const contentProvider = new ContentProvider();
    const _phrases = await contentProvider.getAllWordsContents();
   this.phrases =  _phrases;
  }

  @action getRandomContent =  () => {
    this.currentPhrase = null; // to remove old value
    const contents = this.phrases;
    const randomContent = contents[Math.floor(Math.random() * contents.length)];
    this.currentPhrase = randomContent;
  };

  @action replayPhrase = ()=> {
 //! WILL BE FILLED 
}
   
  @action toggleTalkDialog =(state:boolean = false) => {
    this.showTalkDialog = state;
  }
}

export default new ContentStore();
