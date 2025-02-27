import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma/prisma.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
