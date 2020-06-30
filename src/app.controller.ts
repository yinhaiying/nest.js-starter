import { Request } from 'express';
import { Controller, Get, Query, Post, Body, UsePipes } from '@nestjs/common';
import { AppService } from './app.service';
import { AppDto } from './app.dto';
import { AppDtoValidationPipe } from './app-dto-validation-pipe';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/user')
  getUser(@Query() key?: string): void {
    console.log(key);
  }

  @Post('/user')
  @UsePipes(AppDtoValidationPipe)
  getUserInfo(@Body() key: AppDto): string {
    console.log(key);
    return 'hello';
  }
}
