import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/prisma.service";
import { Group, Prisma } from '@prisma/client';

@Injectable()
export class GroupService {
  constructor(private prisma: PrismaService) {}

  async getByID(
    searchInput: Prisma.GroupWhereUniqueInput,
  ): Promise<Group | null> {
    return this.prisma.group.findUnique({
      where: searchInput,
    });
  }

  async filter(params: {
    cursor?: Prisma.GroupWhereUniqueInput;
    where?: Prisma.GroupWhereInput;
    orderBy?: Prisma.GroupOrderByWithRelationInput;
  }): Promise<Group[]> {
    const { cursor, where, orderBy } = params;
    return this.prisma.group.findMany({
      cursor,
      where,
      orderBy,
    });
  }

  async create(data: Prisma.GroupCreateInput): Promise<Group> {
    return this.prisma.group.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.GroupWhereUniqueInput;
    data: Prisma.GroupUpdateInput;
  }): Promise<Group> {
    const { where, data } = params;
    data.updated_at = new Date()
    return this.prisma.group.update({
      data,
      where,
    });
  }

  async delete(where: Prisma.GroupWhereUniqueInput): Promise<Group> {
    return this.prisma.group.delete({
      where,
    });
  }
}