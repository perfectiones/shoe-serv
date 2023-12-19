import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateBoilerDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  boiler_manufacturer: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  parts_manufacturer: string;

  @IsNotEmpty()
  vendor_code: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  compatibility: string;

  @IsNotEmpty()
  images: string;

  @IsNotEmpty()
  in_stock: number;

  @IsNotEmpty()
  bestseller: boolean;

  @IsNotEmpty()
  new: boolean;

  @IsNotEmpty()
  popularity: number;

  @IsNotEmpty()
  createdAt: string;

  @IsNotEmpty()
  updatedAt: string;
}
