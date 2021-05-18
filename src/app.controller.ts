import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/user')
  async getUsers(): Promise<User[]> {
    console.log('inside get');
    return this.appService.getUsers();
  }

  @Post('/create')
  createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.appService.createUser(createUserDto);
  }
}
