import { Controller, Get } from '@nestjs/common';
import { Beer } from '@ngpoland/shared';
import { BeersService } from './beers.service';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  findAll(): Beer[] {
    return [];
  }
}
