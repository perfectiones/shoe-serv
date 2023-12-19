import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './order.model';
import { UsersModule } from 'src/users/users.module';
import { BoilerPartsModule } from 'src/boiler-parts/boiler-parts.module';

@Module({
  imports: [
    SequelizeModule.forFeature([Order]),
    UsersModule,
    BoilerPartsModule,
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
