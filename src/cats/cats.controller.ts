import { Controller, Get, Query, Post, Body, UsePipes } from '@nestjs/common';
import { CatsService } from './cats.service';
@Controller('/cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  createCats(): string {
    return this.catsService.createCats();
  }
}
