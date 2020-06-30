import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class AppDto {
  @IsNotEmpty({ message: '用户名不能为空' })
  @IsString({ message: '用户名必须为String类型' })
  name: string;
  @IsNotEmpty({ message: '年龄不能为空' })
  @IsNumber()
  age: number;
}
