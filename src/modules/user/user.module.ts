import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./application/dto/forget-user.dto";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { UserRepository } from "./infrastructure/repositories/user.repository";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [PrismaModule],
})
export class UserModule {}