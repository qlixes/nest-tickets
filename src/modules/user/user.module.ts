import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { UserService } from "./application/services/user.service";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [PrismaModule],
})
export class UserModule {}