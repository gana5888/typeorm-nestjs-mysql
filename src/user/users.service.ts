/* users.service.ts */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from './dto/type';
import { UserEntitiy } from './user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntitiy) private userRepository: Repository<UserEntitiy>,
    ) { }

    async getUser() {
        let data = this.userRepository.find();
        let query = await this.userRepository.createQueryBuilder("users")
            .select("users.id", "id")
            .addSelect("users.username", "username")
            .leftJoinAndSelect("users.group", "group")
            .getRawMany()
        console.log(query);

        return data;
    }

    createUser(userDetails: CreateUserParams) {
        const newUser = this.userRepository.create({ ...userDetails, createdAt: new Date() });
        return this.userRepository.save(newUser);
    }

    updateUser(id: number, updateUserDetails: UpdateUserParams) {
        return this.userRepository.update({ id }, { ...updateUserDetails })
    }

    deleteUser(id: number) {
        return this.userRepository.delete(id)
    }
}