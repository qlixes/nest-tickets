import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class RoleRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(data: any): Promise<Role> {
    const role = await this.prisma.role.findFirst({
      where: data,
    });

    return role;
  }

  /**
   * property: {
   *    page: number,
   *    limit: number,
   *    total: number,
   *    pages: number,
   *    sort: string,
   * }
   */
  async findMany(data: any, property: any): Promise<Role[]> {
    const role = await this.prisma.role.findMany({
      where: data,
    });

    return role;
  }

  async store(data: any): Promise<Role> {
    const role = await this.prisma.role.create({
      data: data,
    });

    return role;
  }

  async update(condition: any, data: any): Promise<Role> {
    const role = await this.prisma.role.update({
      where: condition,
      data: data,
    });

    return role;
  }
}
