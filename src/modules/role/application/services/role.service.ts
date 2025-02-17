import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repositories/role.repository';
import { EmptyDataException } from 'src/common/exceptions/empty-data.exception';
import { Role } from '@prisma/client';

@Injectable()
export class RoleService {
  constructor(private readonly repository: RoleRepository) {}
}
