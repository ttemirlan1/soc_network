import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Posts } from 'src/posts/entities/post.entity';
// import { Subs } from 'src/subs/entities/subs.entity';

dotenv.config();
export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [Profile, Posts],
  autoLoadEntities: true,
  synchronize: true,
};
