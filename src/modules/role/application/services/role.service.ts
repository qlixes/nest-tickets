import { Injectable } from '@nestjs/common';
import { RoleRepository } from '../../infrastructure/repositories/role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly repository: RoleRepository) {}
}
