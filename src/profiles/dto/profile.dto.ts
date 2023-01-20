import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @ApiProperty({ default: 'John' })
  FirstName: string;
  @ApiProperty({ default: 'Doe' })
  @IsString()
  LastName: string;
  @IsEmail()
  @ApiProperty({ default: 'johndoe@gmail.com' })
  email: string;
}
