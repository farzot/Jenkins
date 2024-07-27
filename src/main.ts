import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3011, () => {
    console.log('Server is running on http://localhost:3011');
  });
}
bootstrap();
