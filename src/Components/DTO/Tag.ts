export class Tag {

    /** @type {string} */
    title;

    /**
     * @param {Tag} data
     */
    constructor(data = null) {
        this.title = data?.title;
    }

}
