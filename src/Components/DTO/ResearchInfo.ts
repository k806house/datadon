export class ResearchInfoView {
    id: number;
    title: string;
    description: string;
    participantsCnt: number;
    totalParticipantsCnt: number;
    tags: string[];
    dateCreated: Date;

    constructor(data) {
        this.id = data?.id;
        this.title = data?.title;
        this.description = data?.description;
        this.participantsCnt = data?.participantsCnt;
        this.totalParticipantsCnt = data?.totalParticipantsCnt;
        this.tags = data?.tags;
        this.dateCreated = data?.dateCreated;
    }
}