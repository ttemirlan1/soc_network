import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateProfileDto } from 'src/profiles/dto/profile.dto';
import { ToFollowDto } from './dto/tofollow';
import { SubsService } from './subs.service';

@ApiTags('Subscriptions')
@Controller('blog/subscribe')
export class SubsController {
  constructor(private readonly subsService: SubsService) {}

  @Get(':email')
  async ShowMySubscribes(@Param('email') email: string) {
    return await this.subsService.ShowMySubscribes(email);
  }

  @Post()
  async ToSubscribe(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @Body() createProfileDto: CreateProfileDto,
    @Body() toFollowDto: ToFollowDto,
  ) {
    return await this.subsService.ToSubcribe(toFollowDto);
  }

  @Delete()
  async DeleteMySubs(@Body() toFollowDto: ToFollowDto) {
    return await this.subsService.RemoveToSubscribes(toFollowDto);
  }
}
