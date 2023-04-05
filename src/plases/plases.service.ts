import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreatePlasesDto } from './dto/create-plases.dto';
import { Plase } from './plases.model';

@Injectable()
export class PlasesService {

  constructor (@InjectModel(Plase) private plaseRepository: typeof Plase) {}
  
  async createPlase(dto: CreatePlasesDto) {
    const plase = await this.plaseRepository.create(dto);
    return plase;
  }
  
  async getAllPlases() {
    const plases = await this.plaseRepository.findAll();
    return plases;
  }
}
