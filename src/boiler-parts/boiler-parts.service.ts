import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Op } from 'sequelize';
import { BoilerParts } from './boiler-parts.model';
import { IBoilerPartsFilter, IBoilerPartsQuery } from './types';
import { UpdateBoilerDto } from './dto/update.dto';

@Injectable()
export class BoilerPartsService {
  constructor(
    @InjectModel(BoilerParts)
    private boilerPartsModel: typeof BoilerParts,
  ) {}

  async paginateAndFilter(
    query: IBoilerPartsQuery,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    const limit = +query.limit;
    const offset = +query.offset * 20;
    const filter = {} as Partial<IBoilerPartsFilter>;

    if (query.priceFrom && query.priceTo) {
      filter.price = {
        [Op.between]: [+query.priceFrom, +query.priceTo],
      };
    }

    if (query.boiler) {
      filter.boiler_manufacturer = JSON.parse(decodeURIComponent(query.boiler));
    }

    if (query.parts) {
      filter.parts_manufacturer = JSON.parse(decodeURIComponent(query.parts));
    }

    return this.boilerPartsModel.findAndCountAll({
      limit,
      offset,
      where: filter,
    });
  }

  async bestsellers(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      where: { bestseller: true },
    });
  }

  async new(): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      where: { new: true },
    });
  }

  async findOne(id: number | string): Promise<BoilerParts> {
    return this.boilerPartsModel.findOne({
      where: { id },
    });
  }

  async findOneByName(name: string): Promise<BoilerParts> {
    return this.boilerPartsModel.findOne({
      where: { name },
    });
  }

  async searchByString(
    str: string,
  ): Promise<{ count: number; rows: BoilerParts[] }> {
    return this.boilerPartsModel.findAndCountAll({
      limit: 20,
      where: { name: { [Op.like]: `%${str}%` } },
    });
  }

  async create(el: any) {
    const boiler = new BoilerParts();

    boiler.bestseller = false;
    boiler.new = true;
    boiler.price = el.price;
    boiler.parts_manufacturer = el.parts_manufacturer;
    boiler.vendor_code = el.vendor_code;
    boiler.name = el.name;
    boiler.description = el.description;
    boiler.images = null;
    boiler.in_stock = 10;
    boiler.popularity = 0;
    boiler.compatibility = el.compatibility;

    return boiler.save();
  }

  async updateBoiler(updateBoiler: UpdateBoilerDto): Promise<BoilerParts> {
    const boiler = await this.boilerPartsModel.findOne({
      where: { id: updateBoiler.id },
    });

    console.log(updateBoiler);
    boiler.name = updateBoiler.name;
    boiler.description = updateBoiler.description;
    boiler.price = updateBoiler.price;
    boiler.vendor_code = updateBoiler.vendor_code;
    boiler.boiler_manufacturer = updateBoiler.boiler_manufacturer;
    boiler.compatibility = updateBoiler.compatibility;
    // Тут можно писать то что обновится в заказе
    // console.log(boiler);
    return boiler.save();
  }

  async deleteBoilerPart(id: number): Promise<void> {
    await this.boilerPartsModel.destroy({
      where: { id },
    });
  }
}
