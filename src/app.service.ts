import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { name, email } = createUserDto;
    const user = await this.userRepository.create({
      name,
      email,
    });
    await this.userRepository.save(user);
    return user;
  }
}
