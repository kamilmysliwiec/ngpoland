import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BeersModule } from './beers/beers.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BeersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
