export default class DataModal {
  /**
    *@param {string} title
    *@param {object} file
    *@param {number} cntParticipant
    */

  constructor(data) {
    this.title = data?.title;
    this.file = data?.file;
    this.cntParticipant = data?.cntParticipant;
  }
}
