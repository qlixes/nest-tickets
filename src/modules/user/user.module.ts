import { Module } from "@nestjs/common";
import { UserService } from "./application/services/user.service";
import { UserRepository } from "./infrastructure/repositories/user.repository";
import { PrismaModule } from "src/common/prisma/prisma.module";

@Module({
    controllers: [],
    providers: [UserService, UserRepository],
    exports: [UserService],
    imports: [PrismaModule],
})
export class UserModule {}