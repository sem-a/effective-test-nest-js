import { PrismaService } from 'prisma/prisma.service';
export declare class SeedService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    seed(): Promise<void>;
}
