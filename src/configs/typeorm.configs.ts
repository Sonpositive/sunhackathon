import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig : TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username : 'postgres',
    password : '245600',
    database : 'sunhack',
    entities : [__dirname + '/../**/*.entity.{js, ts}'],
    synchronize : true
}