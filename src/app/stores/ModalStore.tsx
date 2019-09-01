import { observable, action, autorun, reaction, when } from 'mobx';

class ModalStore {
  @observable isModalActive: boolean = false;
  @observable selectedCardsWordList: Array<string> = null;
  constructor() {
    console.log("store initialized");

  }


  @action setWordList(wordList: Array<string>) {
    this.selectedCardsWordList = wordList;
  }

  @action openModal() {
    console.log("open modal");

    this.isModalActive = true;
  }

  @action closeModal() {
    console.log("close modal");

    this.isModalActive = false;
  }
}

export default new ModalStore();