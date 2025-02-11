export class UserEntity {
    constructor(
        public readonly id: string,
        public readonly roleId: number,
        public readonly name: string,
        public readonly email: string,
        public readonly phone: string,
        public readonly telegramId: string,
        public readonly isActive: boolean,
        public readonly createdAt: Date
    ) {}
}