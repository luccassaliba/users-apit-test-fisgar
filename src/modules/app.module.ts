import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { GroupModule } from './groups/groups.module';
import { PrismaService } from 'src/shared/prisma.service';

@Module({
  imports: [UserModule, GroupModule],
  providers: []
})
export class AppModule {}