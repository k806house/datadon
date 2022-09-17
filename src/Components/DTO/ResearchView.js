export default class ResearchView {
      /**
    *@param {number} id
    *@param {string} title
    *@param {string} file
    *@param {number} cntParticipant
    *@param {number} cntParticipantFound
     */


    constructor(data) {
        this.id = data?.id;
        this.title = data?.title;
        this.file = data?.file;
        this.cntParticipant = data?.cntParticipant;
        this.cntParticipantFound = data?.cntParticipantFound;
    }
}