export class Explore {

    /** @type {string} */
    title;
    /** @type {string} */
    description;
    /** @type {Date} */
    date;
    /** @type {object} */
    file;
    /** @type {Tag[]} */
    tags

    /**
     * @param {Explore} data
     */
    constructor(data = null) {
        this.title = data?.title;
        this.description = data?.description;
        this.date = data?.date;
        this.file = data?.file;
        this.tags = data?.tags;
    }

}