import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../auth/auth.service';

describe('AuthService', () => {
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    authService = module.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should return an access token and a cookie', async () => {
      // Arrange
      const loginDto = {
        username: 'desafiosharenergy',
        password: 'sh@r3n3rgy',
        rememberMe: true,
      };

      // Act
      const result = await authService.login(loginDto);

      // Assert
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('cookie');
    });
  });
});
