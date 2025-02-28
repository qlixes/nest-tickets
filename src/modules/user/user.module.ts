import { Module } from "@nestjs/common";
import { UserService } from "./application/services/user.service";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { UserController } from "./infrastructure/controllers/user.controller";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepository],
    imports: [PrismaModule],
})
export class UserModule {}