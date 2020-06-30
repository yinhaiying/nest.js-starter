import { CatsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppDtoValidationPipe } from './app-dto-validation-pipe';

@Module({
  imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService, AppDtoValidationPipe],
})
export class AppModule {}
