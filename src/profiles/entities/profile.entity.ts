import { isNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'John' })
  FirstName: string;

  @Column({ default: 'Doe' })
  LastName: string;

  @Column()
  email: string;
  // @ManyToMany(() => Profile)
  // @JoinTable()
  // subs: [];
}
