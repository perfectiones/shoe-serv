import { faker } from '@faker-js/faker';
import { Op } from 'sequelize';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class BoilerParts {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  boiler_manufacturer: string;

  @ApiProperty({ example: 12345 })
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  compatibility: string;

  @ApiProperty({ example: faker.image.city() })
  images: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: true })
  bestseller: boolean;

  @ApiProperty({ example: false })
  new: boolean;

  @ApiProperty({ example: 123 })
  popularity: number;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-01-31T19:46:45.000Z' })
  updatedAt: string;
}

export class PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: BoilerParts;
}

export class Bestsellers extends BoilerParts {
  @ApiProperty({ example: true })
  bestseller: boolean;
}

export class GetBestsellersResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: Bestsellers;
}

export class NewParts extends BoilerParts {
  @ApiProperty({ example: true })
  new: boolean;
}

export class GetNewResponse extends PaginateAndFilterResponse {
  @ApiProperty({ example: 10 })
  count: number;

  @ApiProperty({ type: BoilerParts, isArray: true })
  rows: NewParts;
}

export class SearchByLetterResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class SearchResponse extends PaginateAndFilterResponse {
  @ApiProperty({ type: SearchByLetterResponse, isArray: true })
  rows: SearchByLetterResponse;
}

export class SearchRequest {
  @ApiProperty({ example: 'r' })
  search: string;
}

export class GetByNameResponse extends BoilerParts {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class PostNewBoiler extends BoilerParts {
  @ApiProperty({ example: faker.lorem.sentence(2) })
  @IsNotEmpty()
  boiler_manufacturer: string;

  @ApiProperty({ example: 12345 })
  @IsNotEmpty()
  price: string;

  @ApiProperty({ example: faker.lorem.sentence(2) })
  @IsNotEmpty()
  parts_manufacturer: string;

  @ApiProperty({ example: faker.internet.password() })
  @IsNotEmpty()
  vendor_code: string;

  @ApiProperty({ example: faker.lorem.word() })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: faker.lorem.sentence() })
  @IsNotEmpty()
  compatibility: string;

  @ApiProperty({ example: faker.image.city() })
  @IsNotEmpty()
  images: string;

  @ApiProperty({ example: 5 })
  @IsNotEmpty()
  in_stock: number;

  @ApiProperty({ example: true })
  @IsNotEmpty()
  bestseller: boolean;

  @ApiProperty({ example: false })
  @IsNotEmpty()
  new: boolean;

  @ApiProperty({ example: 123 })
  @IsNotEmpty()
  popularity: number;
}

export class GetByNameRequest {
  @ApiProperty({ example: 'Provident incidunt.' })
  name: string;
}

export class FindOneResponse extends BoilerParts {}

export interface IBoilerPartsQuery {
  limit: string;
  offset: string;
  boiler: string | undefined;
  parts: string | undefined;
  priceFrom: string | undefined;
  priceTo: string | undefined;
}

export interface IBoilerPartsFilter {
  boiler_manufacturer: string | undefined;
  parts_manufacturer: string | undefined;
  price: { [Op.between]: number[] };
}
