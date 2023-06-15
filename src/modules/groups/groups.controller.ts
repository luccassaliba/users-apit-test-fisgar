import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { GroupInputDTO } from "./dto/input.dto";
import { GroupService } from "./groups.service";
import { GroupOutputDTO } from "./dto/output.dto";

@Controller('groups')
export class GroupController {
    constructor(private groupService: GroupService) {}

    @Post()
    async create(@Body() groupData : GroupInputDTO) {
        const newGroup = await this.groupService.create(groupData)

        const { id, title, inserted_at, updated_at } = newGroup

        return {
            data: new GroupOutputDTO( id, title, inserted_at, updated_at ),
            message: "Group created."
        }
    }

    @Get()
    async get() {
        const groups = {
            data: await this.groupService.filter({})
        }
        return groups
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() newData : GroupInputDTO) {
        const idNumber = parseInt(id)
        return await this.groupService.update({ where: {id: idNumber}, data: newData})
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        const idNumber = parseInt(id)
        return await this.groupService.delete({id: idNumber})
    }
    
}