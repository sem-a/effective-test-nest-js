"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const seed_service_1 = require("./users/seed.service");
const prisma_service_1 = require("../prisma/prisma.service");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const prismaService = app.get(prisma_service_1.PrismaService);
    const seedService = new seed_service_1.SeedService(prismaService);
    await seedService.seed();
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map