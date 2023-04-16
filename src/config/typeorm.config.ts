import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    if (process.env.NODE_ENV === 'dev') {
      return {
        type: 'postgres',
        url: this.configService.get<string>('DB_URL'),
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        synchronize: false,
        logging: true,
      };
    } else {
      return {
        type: 'postgres',
        host: this.configService.get<string>('DB_HOST'),
        port: this.configService.get<number>('DB_PORT'),
        username: this.configService.get<string>('DB_USER'),
        password: this.configService.get<string>('DB_PASSWORD'),
        database: this.configService.get<string>('DB_NAME'),
        entities: [__dirname + '/../**/*.entity.{ts,js}'],
        synchronize: false,
        logging: true,
      };
    }
  }
}
