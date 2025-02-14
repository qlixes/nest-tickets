import { Injectable, NotFoundException } from "@nestjs/common";
import { Role } from "@prisma/client";
import { PrismaService } from "src/common/prisma/prisma.service";

@Injectable()
export class RoleRepository {
    constructor(private prisma: PrismaService) {}

    async findId(id: number): Promise<Role> {
        let role = await this.prisma.role.findFirst({
            where: {
                id: id,
            },
        });

        return role;
    }

    async show(): Promise<Role[]> {
        let role = await this.prisma.role.findMany();

        return role;
    }
}