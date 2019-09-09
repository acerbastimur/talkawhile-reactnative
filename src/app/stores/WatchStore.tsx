import { observable, action, autorun, reaction, when } from 'mobx';
import IContent from '../models/Content';
import ContentStore from '../stores/ContentStore';
class WatchStore {
    constructor() {
        console.log("watch store initialized");
    }

    @observable content: IContent = ContentStore.content[0]; // ! will be removed


}

export default new WatchStore();