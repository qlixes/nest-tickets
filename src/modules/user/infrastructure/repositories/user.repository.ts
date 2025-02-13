import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/common/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async find(email: string): Promise<User> {
        let user = await this.prisma.user.findFirst({
            where: {
                email: email,
            }
        });

        return user;
    }

    async create(params: any): Promise<User> {
        let user = await this.prisma.user.create({
            data: params,
        });

        return user;
    }

    async update(id: number, params: any) {
        let user = await this.prisma.user.update({
            where: {
                id: id,
            },
            data: {

            },
        });

        return user;
    }

    async delete(id: number) {
        let user = await this.prisma.user.delete({
            where: {
                id: id,
            }
        });
    }
}