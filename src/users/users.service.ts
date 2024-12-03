import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async resetUserProblems(): Promise<number> {
    const count = await this.prisma.user.count({
      where: { hasProblems: true },
    });
    await this.prisma.user.updateMany({
      data: {
        hasProblems: false,
      },
    });

    return count;
  }
}
