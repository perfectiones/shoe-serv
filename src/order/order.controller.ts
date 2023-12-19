import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Body,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.model';
import { CreateOrderDto } from './dto/create-order.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { UpdateOrderDto } from './dto/update-order.DTO';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get('/all')
  getOrders() {
    return this.orderService.getAllOrders();
  }

  @UseGuards(AuthenticatedGuard)
  @Post('/create')
  createNewOrde(@Body() orderDto: CreateOrderDto) {
    return this.orderService.create(orderDto);
  }

  @UseGuards(AuthenticatedGuard)
  @Patch('/update/:id')
  updateOrder(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.updateOrder(updateOrderDto);
  }
}
