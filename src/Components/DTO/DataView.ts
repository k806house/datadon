export class DataView {

    /** @type {string} */
    title;
    /** @type {Date} */
    dateCreated;
    /** @type {int} */
    iconId;

    /**
     * @param {DataView} data
     */
    constructor(data = null) {
        this.title = data?.title;
        this.dateCreated = data?.dateCreated;
        this.iconId = data?.iconId;
    }

}