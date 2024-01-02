/* user.entity.ts */
/* eslint-disable prettier/prettier */

import { UserEntitiy } from "src/user/user.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity({ name: 'group' })
export class GroupEntitiy {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({ nullable: true })
    notes: string;

    @Column()
    createdAt: Date;

    @OneToMany(type => UserEntitiy, userEntitiy => userEntitiy.group, { eager: true })
    users: UserEntitiy[];
}