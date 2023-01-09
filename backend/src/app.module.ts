import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RandomDogModule } from './entities/random-dog/random-dog.module';
import { HttpCatModule } from './entities/http-cat/httpcat.module';
import { UserModule } from './entities/random-user/random-user.module';
import { CustomerModule } from './entities/customer/customer.module';
import { databaseProvider } from './mongoose.providers';

ConfigModule.forRoot();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    AuthModule,
    HttpCatModule,
    RandomDogModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService, databaseProvider],
})
export class AppModule {}
