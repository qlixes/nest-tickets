import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./application/dto/forget-user.dto";
import { PrismaModule } from "src/common/prisma/prisma.module";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [PrismaModule],
})
export class UserModule {}