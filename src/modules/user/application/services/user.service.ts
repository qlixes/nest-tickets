import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { DuplicateDataException } from 'src/common/exceptions/duplicate-data.exception';

@UseInterceptors(ClassSerializerInterceptor)
@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async show() {
    return this.repository.findPaginate();
  }

  async store(user: any) {
    const users = await this.repository.findOne(user);

    if(users) {
      throw new DuplicateDataException();
    }

    return this.repository.store(user);
  }
}
