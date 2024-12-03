import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SeedService {
  constructor(private readonly prisma: PrismaService) {}

  async seed() {

    await this.prisma.user.deleteMany({});

    const users = Array.from({ length: 2000000 }, (_, index) => ({
      firstName: `Имя${index}`,
      lastName: `Фамилия${index}`,
      age: Math.floor(Math.random() * (60 - 18 + 1)) + 18,
      gender: Math.random() > 0.5 ? 'Мужской' : 'Женский',
      hasProblems: Math.random() > 0.5,
    }));

    await this.prisma.user.createMany({
      data: users,
    });

    console.log('База данных успешно заполнена!');
  }
}
