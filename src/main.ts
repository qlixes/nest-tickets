import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { BadRequest } from './common/filters/bad-request.filter';
import { ResponseHandlerInterceptor } from './common/interceptors/response-handler.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    forbidUnknownValues: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  app.useGlobalInterceptors(new ResponseHandlerInterceptor());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalFilters(new BadRequest());

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');

  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
