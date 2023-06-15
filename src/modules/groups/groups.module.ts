import { Module } from "@nestjs/common";
import { GroupController } from "./groups.controller";
import { GroupService } from "./groups.service";
import { PrismaService } from "src/shared/prisma.service";

@Module({
    controllers: [GroupController],
    providers: [GroupService, PrismaService]
})
export class GroupModule {}