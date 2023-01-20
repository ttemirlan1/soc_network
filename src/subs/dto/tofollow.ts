// import { ApiProperty } from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class ToFollowDto {
  @IsEmail()
  @ApiProperty({ default: '@gmail.com' })
  fromfollow: string;
  @ApiProperty({ default: '@gmail.com' })
  @IsEmail()
  tofollow: string;
}
