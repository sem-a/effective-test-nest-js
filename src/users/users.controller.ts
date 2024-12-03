import { Controller, Patch } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Patch('/reset-problems')
  async resetUserProblems(): Promise<number> {
    return this.userService.resetUserProblems();
  }
}
