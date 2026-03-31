import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validação automática dos DTOs
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Remove propriedades não decoradas
    forbidNonWhitelisted: true, // Lança erro se houver propriedades não permitidas
    transform: true, // Transforma payloads em objetos DTO
  }));

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('Desafio Itaú API')
    .setDescription('API para gerenciamento de transações')
    .setVersion('1.0')
    .addTag('transactions', 'Operações relacionadas a transações')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
