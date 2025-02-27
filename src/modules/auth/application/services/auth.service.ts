import { ClassSerializerInterceptor, Injectable, UseInterceptors } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as _ from 'lodash';
import { AuthRepository } from '../../infrastructure/repositories/auth.repository';
import { AuthEntity } from '../../domain/entities/auth.entity';

@UseInterceptors(ClassSerializerInterceptor)
@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  async auth(params: {
    email: string,
    password: string,
  }) {

    // const auth =  await this.repository.findOne(params.email);

    // return new AuthEntity(auth);
  }
}
