import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { UserEntity } from '../../domain/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<UserEntity | null> {
    const user = await this.prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    return user;
  }

  async findPaginate(
    filter?: any,
    property?: {
      page: number;
      limit: number;
    },
  ): Promise<UserEntity[]> {
    const skip = property?.page ?? 1;
    const take = property?.limit ?? 10;

    const users = await this.prisma.user.findMany({
      where: filter,
      include: {
        role: true,
      },
    });

    return format;
  }

  async findMany(
    filter: any,
    property: {
      page?: number;
      limit?: number;
    },
  ) {
    const skip = property?.page ?? 1;
    const take = property?.limit ?? 10;

    const user = this.prisma.user.findMany({
      where: filter,
      take: take,
      skip: skip,
    });

    return user;
  }

  async update(id: number, data: any): Promise<void> {}

  async delete(id: number): Promixe<void> {}
}
