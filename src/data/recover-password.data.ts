import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RecoverPasswordData {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string;
}
