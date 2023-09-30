import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Delivery } from './delivery.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class DeliveryService {
  constructor(
    @InjectModel(Delivery)
    private boilerPartsModel: typeof Delivery,
    private readonly UsersService: UsersService,
  ) {}
}
