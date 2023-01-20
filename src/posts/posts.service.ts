import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { Posts } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Posts) private postRepo: Repository<Posts>,
    @InjectRepository(Profile) private profRepo: Repository<Profile>,
  ) {}

  async create(createPostDto: CreatePostDto, email2: string) {
    const user = await this.profRepo.findOne({ where: { email: email2 } });
    if (!user) throw new NotFoundException();
    console.log(user, email2);
    return await this.postRepo.save({
      message: createPostDto.message,
      profile: user,
    });
  }

  async findAll() {
    return await this.postRepo.find();
  }

  async find(email: string): Promise<any> {
    const user = await this.profRepo.findOne({ where: { email: email } });
    console.log(user);
    if (user)
      return await this.postRepo.find({
        where: { profile: user },
      });
    else throw new NotFoundException();
  }
}
