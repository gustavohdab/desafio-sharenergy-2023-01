import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { LoginDto } from '../dto/login.dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  private readonly validCredentials = {
    username: 'desafiosharenergy',
    password: 'sh@r3n3rgy',
  };

  async login(
    loginDto: LoginDto,
  ): Promise<{ accessToken: string; cookie: string }> {
    // Verifica se existe um usuário com o username e password fornecidos
    const user = await this.findUserByUsernameAndPassword(loginDto);
    if (!user) {
      throw new HttpException(
        'Username or password invalid',
        HttpStatus.UNAUTHORIZED,
      );
    }

    // Se existir, gere um token de acesso
    const accessToken = this.generateAccessToken(user);

    // Crie um cookie com o token de acesso e a data de expiração, usuário clicar em "Lembrar-me" o cookie expira em 30 dias, caso contrário, expira ao fechar o navegador.
    const expiresIn = loginDto.rememberMe ? '30d' : '1d';
    const cookie = `access_token=${accessToken}; Max-Age=${expiresIn}; HttpOnly`;

    // Retorne o token de acesso e o cookie
    return { accessToken, cookie };
  }

  private async findUserByUsernameAndPassword(
    loginDto: LoginDto,
  ): Promise<any> {
    if (
      loginDto.username === this.validCredentials.username &&
      loginDto.password === this.validCredentials.password
    ) {
      // Se os dados de login forem válidos, retorne um objeto simulando um usuário
      return { id: 1, name: 'User' };
    } else {
      return null;
    }
  }

  private generateAccessToken(user: any): string {
    // Gere o token de acesso usando a lib jsonwebtoken
    return jwt.sign(user, 'sh@r3n3rgy');
  }
}
