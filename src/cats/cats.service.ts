import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  createCats(): string {
    return '创建了一只猫!';
  }
}
