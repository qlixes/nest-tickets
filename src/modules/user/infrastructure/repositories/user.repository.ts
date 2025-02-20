import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from '../../domain/entities/user.entity';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class UserRepository {

  constructor(private readonly prisma: PrismaService) {}

  async findId(property: {
    id: number,
  }) {
    const user = await this.prisma.user.findFirst({
      where: property,
      select: {
        role: true
      },
    });

    return new UserEntity(user);
  }

  async findOne(property: {
    email: string,
  }) {
    const user = await this.prisma.user.findFirst({
      where: property,
      select: {
        role: true
      },
    });

    return new UserEntity(user);
  }

  async findPaginate(
    filter?: any,
    property?: {
      page: number;
      limit: number;
    },
  ) {

    const skip = property?.page ?? 1;
    const take = property?.limit ?? 10;

    const users = await this.prisma.user.findMany({
      where: filter,
      include: {
        role: true,
      },
    });

    return users.map((user) => new UserEntity(user));
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

    const users = await this.prisma.user.findMany({
      where: filter,
      include: {
        role: true,
      },
    });

    return users.map((user) => new UserEntity(user));
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

    return new UserEntity(user);
  }
}
