export default class ResearchView {
    id: number;
    title: string;
    file: object;
    cntParticipant: number;
    cntParticipantFound: number;

    constructor(data) {
        this.id = data?.id;
        this.title = data?.title;
        this.file = data?.file;
        this.cntParticipant = data?.cntParticipant;
        this.cntParticipantFound = data?.cntParticipantFound;
    }
}