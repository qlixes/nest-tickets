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

  async findMany() {

    const users = await this.prisma.user.findMany({
      include: {
        role: true,
      },
      // where: {
      //   OR: [
      //     {
      //       email: {
      //         contains: params.search,
      //       }
      //     },
      //     {
      //       name: {
      //         contains: params.search,
      //       },
      //     },
      //     {
      //       name: {
      //         contains: params.search,
      //       },
      //     },
      //   ],
      // },
    }); 

    return users;
  }

  async findPaginate(params: {
    limit?: number,
    page?: number,
    search?: string,
  }) {

    const users = await this.prisma.user.findMany({
      include: {
        _count: true,
      },
      where: {
        OR: [
          {
            email: {
              contains: params.search,
            }
          },
          {
            name: {
              contains: params.search,
            },
          },
          {
            name: {
              contains: params.search,
            },
          },
        ],
      },
    });
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
