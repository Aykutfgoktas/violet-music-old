import { Controller, Request, Post, UseGuards, Body, Res, HttpStatus, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './users/dto/create-user.dto';
import { UsersService } from './users/users.service';
import { Response } from 'express';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private usersService: UsersService, private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('auth/register')
  async register(@Res() res: Response, @Body() createUserdto: CreateUserDto): Promise<Response> {
    const newUser = await this.usersService.create(createUserdto);
    if (newUser) {
      const { nickname } = newUser;
      return res.status(HttpStatus.CREATED).json({ msg: 'User has been created.', nickname });
    } else {
      return res.status(HttpStatus.FOUND).json({ msg: 'User is exist.' });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
