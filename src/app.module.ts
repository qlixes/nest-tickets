import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma/prisma.module';
import { AppController } from './app.controller';
import { UserService } from './modules/user/application/services/user.service';
import { RoleService } from './modules/role/application/services/role.service';
import { UserRepository } from './modules/user/infrastructure/repositories/user.repository';
import { RoleRepository } from './modules/role/infrastructure/repositories/role.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [UserService, UserRepository,RoleService, RoleRepository],
})
export class AppModule {}
