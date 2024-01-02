import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './user/users.module';
import { UserEntitiy } from './user/user.entity';
import { GroupModule } from './group/group.module';
import { GroupEntitiy } from './group/group.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Root@123',
      database: 'GP_DB1',
      entities: [UserEntitiy, GroupEntitiy],
      synchronize: true,
      migrationsRun: false,
    }),
    UsersModule, GroupModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
