import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from './dto/profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ProfilesService } from './profiles.service';

@ApiTags('profiles')
@Controller()
export class ProfilesController {
  constructor(private readonly profileService: ProfilesService) {}

  @Post('profilepost')
  async create(@Body() createProfileDto: CreateProfileDto) {
    return await this.profileService.create(createProfileDto);
  }
  @Get(':email')
  async findProfile(@Param('email') email: string) {
    return await this.profileService.findProfile(email);
  }
  @Post('update/ids')
  async update(
    @Param('some') id: number,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return await this.profileService.update(id, updateProfileDto);
  }
}
