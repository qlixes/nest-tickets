import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repositories/role.repository';
import { EmptyDataException } from 'src/common/exceptions/empty-data.exception';
import { Role } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private readonly repository: RoleRepository) {}

  async find(params: any) {
    const role = await this.repository.findId(params.id);

    if (!role) {
      throw new EmptyDataException();
    }

    return role;
  }

  async show(): Promise<Role[]> {
    const role = await this.repository.show();

    return role;
  }
}
