import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProfileDto } from 'src/profiles/dto/profile.dto';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Repository } from 'typeorm';
import { ToFollowDto } from './dto/tofollow';
import { Subs } from './entities/subs.entity';

@Injectable()
export class SubsService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @InjectRepository(Subs) private subsRepo: Repository<Subs>,
    @InjectRepository(Profile) private profRepo: Repository<Profile>,
  ) {}

  async ShowMySubscribes(email2: string) {
    return await this.subsRepo.find({
      where: { tofollow: email2 },
    });
  }

  async RemoveToSubscribes(toFollowDto: ToFollowDto) {
    return await this.subsRepo.delete(toFollowDto);
  }

  async ToSubcribe(toFollowDto: ToFollowDto) {
    const from = await this.profRepo.findOne({
      where: { email: toFollowDto.fromfollow },
    });
    const to = await this.profRepo.findOne({
      where: { email: toFollowDto.tofollow },
    });
    if (to && from && toFollowDto.tofollow != toFollowDto.fromfollow) {
      return await this.subsRepo.save(toFollowDto);
    } else throw BadRequestException;
  }
}
