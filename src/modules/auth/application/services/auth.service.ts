import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { EmptyDataException } from 'src/common/exceptions/empty-data.exception';
import { InvalidDataException } from 'src/common/exceptions/invalid-data.exception';

@UseInterceptors(ClassSerializerInterceptor)
@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async auth(params: {
    email: string,
    password: string,
  }) {

    const user =  await this.repository.findOne(params.email);

    if(! user) {
      throw new EmptyDataException();
    }

    const incorrectPassword = await bcrypt.compare(params.password, user.password);

    if(! incorrectPassword) {
      throw new InvalidDataException();
    }

    // add authCode
    // user.authCode = "token";

    return user;
  }
}

