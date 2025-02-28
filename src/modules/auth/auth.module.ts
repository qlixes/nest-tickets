import { Module } from "@nestjs/common";
import { PrismaModule } from "src/common/prisma/prisma.module";
import { AuthService } from "./application/services/auth.service";
import { AuthRepository } from "./infrastructure/repositories/auth.repository";
import { AuthController } from "./infrastructure/controllers/auth.controller";
import { PasetoService } from "src/common/services/paseto.service";

@Module({
    controllers: [AuthController],
    providers: [AuthService, AuthRepository, PasetoService],
    imports: [PrismaModule],
})
export class AuthModule {}
