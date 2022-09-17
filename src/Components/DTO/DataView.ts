export default class DataView {

    title: string;
    dateCreated: Date;
    iconId: number;

    constructor(data = null) {
        this.title = data?.title;
        this.dateCreated = data?.dateCreated;
        this.iconId = data?.iconId;
    }

}