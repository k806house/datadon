export default class DataModal {

    title: string;
    file: object;
    cntParticipant: number;

    constructor(data) {
        this.title = data?.title;
        this.file = data?.file;
        this.cntParticipant = data?.cntParticipant;
    }

}