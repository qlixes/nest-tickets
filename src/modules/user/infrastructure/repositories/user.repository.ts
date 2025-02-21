import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserRepository {

  constructor(private readonly prisma: PrismaService) {}

  async findOne(params: {
    id?: number,
    email?: string,
  }) {
    const user = await this.prisma.user.findFirst({
      where: params,
      select: {
        role: true
      },
    });

    return user;
  }

  async findMany(
    params: {
      page?: number;
      limit?: number;
      where?: {

      }
      orderBy?: {

      }
    },
  ) {

    const users = await this.prisma.user.findMany({
      where: filter,
      include: {
        role: true,
      },
    });

    return users;
  }

  async update(id: number, data: any): Promise<void> {}

  async delete(id: number): Promise<void> {}

  async store(data: any) {

    const user = await this.prisma.user.create({
      data: data,
      include: {
        role: true,
      },
    });

    return user;
  }
}
