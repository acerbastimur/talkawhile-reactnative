import { observable, action, autorun, reaction, when } from 'mobx';
import IContent from '../models/Content';
const data = require('../../assets/other/content.json');

class ContentStore {
  @observable content: Array<IContent> = null;

  constructor() {
    console.log("content store initialized");
    this.content = data;
    console.log(data);

  }



}

export default new ContentStore();