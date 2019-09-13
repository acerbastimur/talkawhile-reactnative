import { observable, action, autorun, reaction, when } from 'mobx';
import IContent from './../models/Content';

class ModalStore {
  @observable isModalActive: boolean = false;
  @observable selectedCardDetails: IContent = null;
  @observable modalRef = null;
  constructor() {
    console.log("store initialized");

  }


  @action setCard(card: IContent) {
    this.selectedCardDetails = card;
  }

  @action openModal() {
    console.log("open modal");

    this.modalRef.open();
  }

  @action closeModal() {
    console.log("close modal");

    this.modalRef.close();
  }
}

export default new ModalStore();