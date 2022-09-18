export default class DataView {
    /**
    *@param {number} id
    *@param {string} name
    *@param {Date} created_at
    *@param {number} iconId
     */

    constructor(data) {
        this.id = data?.id;
        this.title = data?.name;
        this.dateCreated = new Date(data?.created_at);
        this.iconId = 0;
    }
}