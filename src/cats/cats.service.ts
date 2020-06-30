import { Injectable } from '@nestjs/common';
import { Animal } from './interface/cat.interface';
@Injectable()
export class CatsService {
  createCats(): string {
    return '创建了一只猫!';
  }
  findOne(): Promise<Animal> {
    return new Promise((res, reject) => {
      res({
        name: 'hello',
        age: 23,
      });
    });
  }
}
