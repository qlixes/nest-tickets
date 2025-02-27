import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { AuthService } from "./application/services/auth.service";
import { AuthRepository } from "./infrastructure/repositories/auth.repository";
import { AuthController } from "./infrastructure/controllers/auth.controller";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AuthRepository],
    imports: [PrismaModule],
})
export class AuthModule {}
