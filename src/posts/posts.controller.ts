import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@ApiTags('posts')
@Controller('blog')
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @Post('posts/:email')
  async create(
    @Body() createPostDto: CreatePostDto,
    @Param('email') email: string,
  ) {
    // console.log(email);
    return await this.postService.create(createPostDto, email);
  }

  @Get('allposts')
  async findAll() {
    return await this.postService.findAll();
  }

  @Get(':profileId')
  async findOne(@Param('profileId') email: string) {
    return await this.postService.find(email);
  }
}
