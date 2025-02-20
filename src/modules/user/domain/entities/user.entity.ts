import { Exclude, Expose, Type } from "class-transformer";
import { RoleEntity } from "src/modules/role/domain/entities/role.entity";

export class UserEntity {
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

    @Expose({ name: "created_at" })
    createdAt: Date;

    @Exclude()
    @Type(() => RoleEntity)
    role: RoleEntity;

    @Expose({ name: "role_name" })
    get roleName(): string {
        return this.role.name;
    }

    constructor(partial: Partial<UserEntity>) {
        Object.assign(this, partial);
    }
}