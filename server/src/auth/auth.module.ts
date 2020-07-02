import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, PassportModule, JwtModule.register({ secret: process.env.JWT_SECRETS, signOptions: { expiresIn: '60s' }, }),],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule { }
