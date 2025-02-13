import { Injectable } from "@nestjs/common";
import { UserRepository } from "../../infrastructure/repositories/user.repository";
import { UserEntity } from "../../domain/entities/user.entity";
import { DuplicateDataException } from "src/common/exceptions/duplicate-data.exception";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly repository: UserRepository) {}

    async signup(params: any) {
        let user = await this.repository.find(params.email);

        if(user) {
            throw new DuplicateDataException();
        }

        let password = await bcrypt.hash(params.password, 16);

        let data = {
            roleId: params.role_id,
            name: params.name,
            email: params.email,
            phone: params.phone,
            password: password,
            telegramId: params.telegram_id,  
        };

        let store = await this.repository.create(data);

        return store;
    }
}