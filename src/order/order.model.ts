import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Order extends Model {
  @Column
  order_status: string;

  @Column
  order_KladStatu: string;

  @Column
  order_user: string;

  @Column
  order_price: number;

  @Column
  order_composition: string;

  @Column
  order_TotalPrice: number;

  @Column
  order_kurier: string;

  @Column
  order_name: string;
}
