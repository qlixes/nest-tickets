import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { AuthEntity } from '../../domain/entities/auth.entity';

@Injectable()
export class AuthRepository {

  constructor(private readonly prisma: PrismaService) {}

  async findOne(email: string): Promise<AuthEntity> {
    const user = await this.prisma.user.findFirst({
      where: {
        email: email,
      },
      include: {
        role: true
      },
    });

    return new AuthEntity(user);
  }
}
