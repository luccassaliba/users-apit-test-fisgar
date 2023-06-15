import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { GroupModule } from './groups/groups.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, GroupModule, AuthModule],
  providers: []
})
export class AppModule {}