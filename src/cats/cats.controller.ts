import {
  Controller,
  Get,
  Query,
  Post,
  Body,
  Param,
  UsePipes,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { paramsType, Animal } from './interface/cat.interface';
@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  createCats(): string {
    return this.catsService.createCats();
  }

  @Get(':id')
  async findCats(@Param() params: paramsType): Promise<Animal> {
    return await this.catsService.findOne();
  }
}
