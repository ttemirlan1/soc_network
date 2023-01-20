import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';

@Entity()
export class Subs {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromfollow: string;

  @Column()
  tofollow: string;

  @ManyToMany(() => Profile)
  @JoinTable()
  profiles: Profile[];
}
