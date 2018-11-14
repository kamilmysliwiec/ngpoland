import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { WorkshopPipe } from './common/parse-int.pipe';
import { DataInterceptor } from './data.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder().setTitle('ngPoland').build(),
  );
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new WorkshopPipe(), new ValidationPipe());
  app.useGlobalInterceptors(
    new DataInterceptor(),
    new ClassSerializerInterceptor(new Reflector()),
  );

  await app.listen(3000);
}
bootstrap();
