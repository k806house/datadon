export default class DataView {
    /**
    *@param {number} id
    *@param {string} title
    *@param {Date} dateCreated
    *@param {number} iconId
     */

    constructor(data) {
        this.id = data?.id;
        this.title = data?.title;
        this.dateCreated = new Date(data?.dateCreated);
        this.iconId = data?.iconId;
    }
}