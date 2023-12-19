import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { BoilerPartsModule } from './boiler-parts/boiler-parts.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { PaymentModule } from './payment/payment.module';
import { DeliveryModule } from './delivery/delivery.module';
import { AdminModule } from './admin/admin.module';
import { DispatcherModule } from './dispatcher/dispatcher.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useClass: SequelizeConfigService,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://wereteno:lbvf355355@shop.hsmntv3.mongodb.net/orders-list?retryWrites=true&w=majority',
    ),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UsersModule,
    AuthModule,
    BoilerPartsModule,
    ShoppingCartModule,
    PaymentModule,
    DeliveryModule,
    AdminModule,
    DispatcherModule,
    OrderModule,
  ],
})
export class AppModule {}
