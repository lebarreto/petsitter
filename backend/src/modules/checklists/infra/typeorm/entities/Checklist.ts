import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

import Users from '../../../../users/infra/typeorm/entities/User';
import Pets from '../../../../pets/infra/typeorm/entities/Pet';

@Entity('checklists')
class Checklist {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    pet_id: string;

    @Column()
    user_id: string;

    @Column('simple-array')
    questions: string[];

    @ManyToOne(() => Users)
    @JoinColumn({ name: 'user_id' })
    user: boolean;

    @ManyToOne(() => Pets)
    @JoinColumn({ name: 'pet_id' })
    pet: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Checklist;
