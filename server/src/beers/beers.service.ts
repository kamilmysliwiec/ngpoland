import { Injectable } from '@nestjs/common';
import { Beer } from '@ngpoland/shared';

@Injectable()
export class BeersService {
  findAll(): Beer[] {
    return [];
  }
}
