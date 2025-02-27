import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';

@Injectable()
export class AuthRepository {

  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
      select: {
        role: true
      },
    });

    return user;
  }
}
