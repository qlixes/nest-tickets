import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { PrismaService } from "src/common/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async createUser(params: { data: Prisma.UserCreateInput }): Promise<User> {
        let { data } = params;

        let  isDuplicate = this.prisma.user.findFirst({
            where: {
                email: data.email
            }
        });

        

        return this.prisma.user.create(params);
    }
}