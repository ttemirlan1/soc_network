import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Posts } from 'src/posts/entities/post.entity';
import { Repository } from 'typeorm';
import { CreateProfileDto } from './dto/profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  constructor(
    @InjectRepository(Profile) private profRepo: Repository<Profile>,
    @InjectRepository(Posts) private postRepo: Repository<Posts>,
  ) {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async create(createProfileDto: CreateProfileDto) {
    return await this.profRepo.save(createProfileDto);
  }

  async findProfile(email: string) {
    const prof = await this.profRepo.findOne({ where: { email } });
    return prof;
    // const posts = await this.postRepo.findOne({ where: { email } });
  }

  async update(id: number, updateProfileDto: UpdateProfileDto) {
    const prof = await this.profRepo.findOne({ where: { id } });
    const updated = Object.assign(prof, updateProfileDto);
    return await this.profRepo.save(updated);
  }
}
