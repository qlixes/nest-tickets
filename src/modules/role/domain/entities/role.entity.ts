import { Expose } from "class-transformer";

export class RoleEntity {

    @Expose()
    id: number;

    @Expose()
    name: string;

    @Expose({ name: "is_active" })
    isActive: boolean;

    constructor(partial: Partial<RoleEntity>) {
        Object.assign(this, partial);
    }    
}