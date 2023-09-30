import { Table, Model, Column } from 'sequelize-typescript';

@Table
export class Delivery extends Model {
  @Column
  userId: string;

  @Column
  order_number: string;

  @Column
  order_status: string;

  @Column
  order_composition: string;
}
