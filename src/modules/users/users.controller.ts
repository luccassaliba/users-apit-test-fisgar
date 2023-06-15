import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UserInputDTO } from "./dto/input.dto";
import { UserService } from "./users.service";
import { UserOutputDTO } from "./dto/output.dto";

@Controller('users')
export class UserController {
    constructor(private userService: UserService) {}

    @Post()
    async create(@Body() userData : UserInputDTO) {
        const group_id_prov = 0
        const newUser = await this.userService.create({group_id: group_id_prov, ...userData})

        const { id, group_id, name, email, inserted_at, updated_at } = newUser

        return {
            data: new UserOutputDTO( id, group_id, name, email, inserted_at, updated_at ),
            message: "User created."
        }
    }

    @Get()
    async get() {
        const users = await this.userService.filter({})
        
        const usersOutput : Array<UserOutputDTO> = users.map(user => {
            const { id, group_id, name, email, inserted_at, updated_at } = user
            const userOutput = new UserOutputDTO( id, group_id, name, email, inserted_at, updated_at )
            return userOutput
        }
        )

        return {
            data: usersOutput
        }
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() newData : UserInputDTO) {
        const idNumber = parseInt(id)
        const updatedUser = await this.userService.update({ where: {id: idNumber}, data: newData})

        const { group_id, name, email, inserted_at, updated_at } = updatedUser

        return {
            data: new UserOutputDTO( idNumber, group_id, name, email, inserted_at, updated_at ),
            message: "User created."
        }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const idNumber = parseInt(id)
        return await this.userService.delete({id: idNumber})
    }
}