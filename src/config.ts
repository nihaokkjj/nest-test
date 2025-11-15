// Config.ts / ...
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: '221108ksj',
  database: 'nest-test',
  entities: ['dist/**/*.entity.{ts,js}'], // 注意：此处可能略有模糊，但格式一般如此
  autoLoadEntities: true,
  synchronize: true,
};
