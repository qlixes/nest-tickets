import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import { DuplicateDataException } from 'src/common/exceptions/duplicate-data.exception';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { UserEntity } from '../../domain/entities/user.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async show(property: {
    
  }): Promise<UserEntity[]> {
    const users =  await this.repository.findMany();

    return users.map((user) => new UserEntity(user))
  }

  async store(user: any): Promise<UserEntity> {

    const filter = _.pick(user, ["email"]);

    const users = await this.repository.findOne(filter);

    if(!_.isNull(users)) {
      throw new DuplicateDataException();
    }

    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password, salt);

    const store = await this.repository.store({
      ...user,
      password: password,
    });

    return new UserEntity(store);
  }

  async 
}
