import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

@UseInterceptors(ClassSerializerInterceptor)
@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async show() {
    return this.repository.findPaginate();
  }
}
