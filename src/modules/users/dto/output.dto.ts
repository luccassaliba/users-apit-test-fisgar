export class UserOutputDTO {
    constructor(
        readonly id : number,
        readonly group_id : number,
        readonly name : string,
        readonly email : string,
        readonly inserted_at : Date,
        readonly updated_at : Date
    ) {}
}