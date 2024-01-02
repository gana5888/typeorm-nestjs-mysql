/* users.service.ts */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupEntitiy } from './group.entity';

@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(GroupEntitiy) private userRepository: Repository<GroupEntitiy>,
    ) { }

    async getUser() {
        let data = this.userRepository.find();
        let query = await this.userRepository.createQueryBuilder("group")
            .select("group.id", "id")
            .addSelect("group.name", "name")
            .addSelect("users", "users")
            .leftJoin("group.users", "users")
            .where("group.name = :name", { name: "group1" })
            .execute()
        console.log(query);

        return data;    }

    createUser(userDetails: any) {
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: any) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id)
    }
}