export class ResearchInfoView {
    /**
    *@param {number} id
    *@param {number} user_id
    *@param {string} name
    *@param {string} description
    *@param {string[]} tags
    *@param {Date} created_at
     */

    constructor(data) {
        this.id = data?.id;
        this.user_id = data?.user_id;
        this.name = data?.name;
        this.description = data?.description;
        this.tags = data?.tags;
        this.created_at = data?.created_at;
    }
}