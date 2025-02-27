import { Exclude, Expose, Type } from "class-transformer";
import { RoleEntity } from "src/modules/role/domain/entities/role.entity";
import * as moment from 'moment';

export class AuthEntity {
    @Expose()
    id: number;

    @Exclude()
    roleId: number;

    @Expose()
    name: string;

    @Expose()
    email: string;

    @Expose()
    phone: string;

    @Exclude()
    password: string;

    @Expose({ name: "telegram_id" })
    telegramId: string;

    @Expose({ name: "is_active" })
    isActive: boolean;

    @Exclude()
    createdAt: Date;

    @Expose({ name: "created_at" })
    get created(): string {
        return moment(this.createdAt).format('YYYY-MM-DD HH:mm:ss');
    }

    @Exclude()
    @Type(() => RoleEntity)
    role: RoleEntity;

    @Expose({ name: "role_name" })
    get roleName(): string {
        return this.role.name;
    }

    constructor(partial: Partial<AuthEntity>) {
        Object.assign(this, partial);
    }
}