import Tag from "./Tag"

export default class ResearchModal {
    /**
    *@param {string} title
    *@param {string} description
    *@param {Date} date
    *@param {object} file
    *@param {Tag[]} date
     */

    constructor(data) {
        this.title = data?.title;
        this.description = data?.description;
        this.date = data?.date;
        this.file = data?.file;
        this.tags = data?.tags;
    }
}