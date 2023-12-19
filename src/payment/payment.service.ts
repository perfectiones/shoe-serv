import { ForbiddenException, Injectable } from '@nestjs/common';
import axios from 'axios';
import { MakePaymentDto } from './dto/make-paymen.dto';
import { CheckPaymentDto } from './dto/check-payment.dto';
import { OrderService } from 'src/order/order.service';
import { CreateOrderDto } from 'src/order/dto/create-order.dto';

@Injectable()
export class PaymentService {
  //МОЙ КОД
 // constructor(private readonly OrderService: OrderService) {}
  //
  async makePayment(makePaymentDto: MakePaymentDto) {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://api.yookassa.ru/v3/payments',
        headers: {
          'Content-Type': 'application/json',
          'Idempotence-Key': Date.now(),
        },
        auth: {
          username: '204971',
          password: 'test_dgisbcPctB1RjjKeSBzdIuXJR0IRTFKm6Rdi9eNGZxE',
        },
        data: {
          amount: {
            value: makePaymentDto.amount,
            currency: 'RUB',
          },
          capture: true,
          confirmation: {
            type: 'redirect',
            return_url: 'http://localhost:3000/order',
          },
          description: makePaymentDto.description,
        },
      });
      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }

  async checkPayment(checkPaymentDto: CheckPaymentDto) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `https://api.yookassa.ru/v3/payments/${checkPaymentDto.paymentId}`,
        auth: {
          username: '204971',
          password: 'test_dgisbcPctB1RjjKeSBzdIuXJR0IRTFKm6Rdi9eNGZxE',
        },
      });

      //this.OrderService.create();
      return data;
    } catch (error) {
      throw new ForbiddenException(error);
    }
  }
}
