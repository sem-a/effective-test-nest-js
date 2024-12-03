"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SeedService = class SeedService {
    constructor(prisma) {
        this.prisma = prisma;
    }
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
};
exports.SeedService = SeedService;
exports.SeedService = SeedService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SeedService);
//# sourceMappingURL=seed.service.js.map