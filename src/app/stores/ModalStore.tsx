import { observable, action, autorun, reaction, when } from 'mobx';
import IContent from './../models/Content';

class ModalStore {
  @observable isModalActive: boolean = false;
  @observable selectedCardDetails: IContent = null;
  constructor() {
    console.log("store initialized");

  }


  @action setCard(card: IContent) {
    this.selectedCardDetails = card;
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