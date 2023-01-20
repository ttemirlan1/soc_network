import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProfileDto } from './profile.dto';

export class UpdateProfileDto extends PartialType(CreateProfileDto) {
  @ApiProperty({ default: 'John' })
  FirstName: string;
  @ApiProperty({ default: 'Doe' })
  LastName: string;
  @ApiProperty({ default: 'johndoe@gmail.com' })
  email: string;
}
