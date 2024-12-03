
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Импортируйте ваш Prisma Service
import { SeedService } from './users/seed.service'; // Импортируйте ваш Seed Service
import { PrismaService } from 'prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const prismaService = app.get(PrismaService); // Получите экземпляр Prisma Service
  const seedService = new SeedService(prismaService); // Создайте новый экземпляр Seed Service
  
  await seedService.seed(); // Запустите метод seed
  
  await app.listen(3000);
}

bootstrap();
