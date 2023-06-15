import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator"

export class UserUpdateDTO {
    
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string

    @IsEmail()
    @IsOptional()
    email: string

    @MinLength(8)
    @IsOptional()
    password: string
}