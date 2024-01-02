/* user.entity.ts */
/* eslint-disable prettier/prettier */

import { GroupEntitiy } from "src/group/group.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable } from "typeorm";

@Entity({ name: 'users' })
export class UserEntitiy {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    createdAt: Date;

    @Column({ nullable: true })
    authStrategy: string;

    @ManyToOne(type => GroupEntitiy, group => group.users, { eager: false, nullable: true })
    @JoinTable()
    group?: GroupEntitiy;

}