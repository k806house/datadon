export class DataModal {

    /** @type {string} */
    title;
    /** @type {object} */
    file;
    /** @type {int} */
    cntParticipant;

    /**
     * @param {DataModal} data
     */
    constructor(data = null) {
        this.title = data?.title;
        this.file = data?.file;
        this.cntParticipant = data?.cntParticipant;
    }

}