import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @ApiProperty({ example: 'Ivan' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly userId: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly partId: any;
}
