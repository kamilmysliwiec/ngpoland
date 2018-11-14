import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { BeersService } from './beers.service';
import { CreateBeerDto } from './dto/create-beer.dto';
import { UserDto } from './dto/user.dto';

@Controller('beers')
export class BeersController {
  constructor(private readonly beersService: BeersService) {}

  @Get()
  findAll(): any {
    const dto = new UserDto();
    dto.firstname = 'Kamil';
    dto.lastname = 'Mysliwiec';
    dto.email = 'email@email';
    dto.password = 'ilovecats';
    dto.role = {
      id: 1,
      name: 'admin',
      createdAt: Date.now(),
    };
    return dto;
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.beersService.findOne(id);
  }

  @Post()
  create(@Body() createBeerDto: CreateBeerDto) {
    this.beersService.create(createBeerDto as any);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', ParseIntPipe) id: number) {
    this.beersService.remove(id);
  }
}
