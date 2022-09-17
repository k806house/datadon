export default class DataView {
    id: number;
    title: string;
    dateCreated: Date;
    iconId: number;

    constructor(data) {
        this.id = data?.id;
        this.title = data?.title;
        this.dateCreated = data?.dateCreated;
        this.iconId = data?.iconId;
    }
}