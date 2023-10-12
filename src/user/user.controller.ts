import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { EditUser } from './dto';
import { UserService } from './user.service';

@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('user')
  getUser(@GetUser() user: User) {
    return user;
  }
  @Patch('user')
  editUser(@GetUser('id') userId: number, @Body() dto: EditUser) {
    this.userService.editUser(userId, dto);
  }
}
