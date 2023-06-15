import { IsNotEmpty } from "class-validator"

export class GroupInputDTO {
    @IsNotEmpty()
    title : string
}