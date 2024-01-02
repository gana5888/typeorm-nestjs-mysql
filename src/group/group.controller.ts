/* users.controller.ts */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { GroupService } from './group.service';

@Controller('group')
export class GroupController {

    constructor(private groupService: GroupService) { }

    @Get()
    getUsers() {
        return this.groupService.getUser();
    }

    @Post()
    createUser(@Body() createUserDto: any) {
        return this.groupService.createUser(createUserDto);
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: any) {
        await this.groupService.updateUser(id, updateUserDto);
    }

    @Delete(':id')
    async deleteUser(@Param('id', ParseIntPipe) id: number) {
        await this.groupService.deleteUser(id);
    }
}