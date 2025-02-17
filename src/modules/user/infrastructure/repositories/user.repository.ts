import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/common/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async findOne(id: number): Promise<User | null> {
        let user = await this.prisma.user.findUnique({
            where: {
                id: id
            }
        });

        return user;
    }

    async findPaginate(filter: any, property: {
        page?: number,
        limit?: number
    }) {
        let query: Prisma.UserFindManyArgs = {
            where: filter
        };
    }

    async findMany() {}
}