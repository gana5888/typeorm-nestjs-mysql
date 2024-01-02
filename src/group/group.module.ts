/* users.module.ts */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';
import { GroupEntitiy } from './group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntitiy])],
  controllers: [GroupController],
  providers: [GroupService],
  // exports: [UserEntitiy]
})
export class GroupModule { }