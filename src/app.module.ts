import { Module } from '@nestjs/common';
import { PrismaModule } from './common/prisma/prisma.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { RedisModule } from 'nestjs-redis';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, RedisModule, CacheModule.registerAsync({}), CacheModule.register({ isGlobal: true})],
  controllers: [],
  providers: [],
})
export class AppModule {}
