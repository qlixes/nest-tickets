import { Log, Ticket, Comment } from "@prisma/client";
import { BaseEntity } from "./base.entity";

export interface UserProps {
    id: number;
    roleId:number;
    name: string;
    email: string;
    password: string;
    phone: string;
    telegramId: string;
    isActive: boolean;
    ticket?: Ticket[]
    log?: Log[]
    comment?: Comment[]
}

export class UserEntity extends BaseEntity<UserProps> {
    constructor(props: UserProps) {
        super(props);
    }

    get id(): number {
        return this.props.id;
    }

    get roleId(): number {
        return this.props.roleId;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get password(): string {
        return this.props.password;
    }

    get phone(): string {
        return this.props.phone;
    }

    get telegramId(): string {
        return this.props.telegramId;
    }

    get isActive(): boolean {
        return this.props.isActive;
    }

    get ticket(): Ticket[] {
        return this.props.ticket;
    }

    get log(): Log[] {
        return this.props.log;
    }

    get comment(): Comment[] {
        return this.props.comment;
    }
}