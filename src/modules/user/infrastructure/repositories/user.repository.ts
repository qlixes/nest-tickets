import { Injectable, NotFoundException } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
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

    async findPaginate(filter?: any, property?: {
        page?: number,
        limit?: number,
    }) {
        let skip = property?.page ?? 1;
        let take = property?.limit ?? 10;

        let users = await this.prisma.user.findMany({
            where: filter, 
            include: {
                role: true,
            },
        });

        const format = users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role.name,
            phone: user.phone,
            telegram_id: user.telegramId,
            is_active: user.isActive,
        }));

        return format;
    }

    async findMany(filter: any, property: {
        page?: number,
        limit?: number
    }) {
        let skip = property?.page ?? 1;
        let take = property?.limit ?? 10;

        let user = this.prisma.user.findMany({
            where: filter, 
            take: take,
            skip: skip,
        });

        return user;
    }

    async update(id: number, data: {

    }) {}
}