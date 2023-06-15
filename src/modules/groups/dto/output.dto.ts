export class GroupOutputDTO {
    constructor(
        readonly id : number,
        readonly title : string,
        readonly inserted_at : Date,
        readonly updated_at : Date
    ) {}
}