import { Injectable, NotFoundException } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "src/common/prisma/prisma.service";

@Injectable()
export class UserRepository {
    constructor(private prisma: PrismaService) {}

    async find(email: string): Promise<User> {
        let user = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        });

        return user;
    }
}