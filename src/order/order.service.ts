import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './order.model';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.DTO';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async create(createOrder: CreateOrderDto) {
    console.log(createOrder);
    const order = new Order();

    const user = await this.usersService.findOne({
      where: { username: createOrder.userId },
    });

    const orders = createOrder.partId.map(async (partId) => {
      const order = new Order();

      const part = await this.boilerPartsService.findOne(partId);

      order.order_user = user.id;
      //order.boiler_manufacturer = part.boiler_manufacturer;
      order.order_composition = part.name;
      order.order_price = part.price;
      //cart.image = JSON.parse(part.images)[0];
      order.order_name = part.name;
      order.order_TotalPrice = part.price;
      order.order_status = 'Заказ принят';
      order.order_kurier = 'Курьер не назначен';
      order.order_KladStatu = 'Товар не добавлен';

      return order.save();
    });

    return Promise.all(orders);
  }

  async updateOrder(updateOrderDto: UpdateOrderDto): Promise<Order> {
    console.log(updateOrderDto);
    const order = await this.orderModel.findOne({
      where: { id: updateOrderDto.id },
    });

    order.order_KladStatu = updateOrderDto.status;
    order.order_price = updateOrderDto.price;
    // Тут можно писать то что обновится в заказе
    return order.save();
  }

  async getAllOrders(): Promise<Order[]> {
    return this.orderModel.findAll();
  }
}
