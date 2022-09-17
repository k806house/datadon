export class ResearchInfoView {
    /**
    *@param {number} id
    *@param {string} title
    *@param {string} description
    *@param {number} participantsCnt
    *@param {number} totalParticipantsCnt
    *@param {string[]} tags
    *@param {Date} dateCreated
     */

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