import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Subs } from './entities/subs.entity';
import { SubsController } from './subs.controller';
import { SubsService } from './subs.service';

@Module({
  imports: [TypeOrmModule.forFeature([Subs, Profile])],
  providers: [SubsService],
  controllers: [SubsController],
  exports: [SubsService],
})
export class SubsModule {}
