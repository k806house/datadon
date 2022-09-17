import Tag from "./Tag"

export default class Research {

    title: string;
    description: string;
    date: Date;
    file: object;
    tags: Tag[];

    constructor(data = null) {
        this.title = data?.title;
        this.description = data?.description;
        this.date = data?.date;
        this.file = data?.file;
        this.tags = data?.tags;
    }

}