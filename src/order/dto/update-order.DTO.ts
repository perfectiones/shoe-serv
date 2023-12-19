import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateOrderDto {
  @ApiProperty({ example: 2 })
  @IsNotEmpty()
  readonly id: number;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ example: 'ZBS' })
  @IsNotEmpty()
  readonly status: string;
}
