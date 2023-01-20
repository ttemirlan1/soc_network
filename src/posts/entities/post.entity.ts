import { IsNotEmpty } from 'class-validator';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posts {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @ManyToOne(() => Profile, (profile) => profile, { onDelete: 'CASCADE' })
  profile: Profile;
}
