import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';
import { BaseRepository } from 'src/common/repository/base.repository';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserRepository extends BaseRepository{

  constructor(prisma: PrismaService) {
    super();
    this.model = prisma.user;
  }

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
    const index = property?.page ?? 1;
    const rows = property?.limit ?? 10;

    const users = await this.prisma.user.findMany({
      where: filter,
      include: {
        role: true,
      },
    });

    return users;
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

  async delete(id: number): Promise<void> {}
}
