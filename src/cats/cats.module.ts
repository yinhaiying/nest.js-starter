import { LoggerMiddleWare } from './../middleware/logger.middleware';
import { CatsService } from './cats.service';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleWare).forRoutes('cats');
  }
}
