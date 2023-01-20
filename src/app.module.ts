import { Module } from '@nestjs/common';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';
import { PostsModule } from './posts/posts.module';
import { ProfilesModule } from './profiles/profiles.module';
import { SubsController } from './subs/subs.controller';
import { SubsService } from './subs/subs.service';
import { SubsModule } from './subs/subs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_CONFIG } from './utils/db.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_CONFIG),
    PostsModule,
    ProfilesModule,
    SubsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
