import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlasesDto } from './dto/create-plases.dto';
import { PlasesService } from './plases.service';

@Controller('plases')
export class PlasesController {
  
  constructor(private plaseService: PlasesService ) {}

  @Post()
  create(@Body() plaseDto: CreatePlasesDto){
    return this.plaseService.createPlase(plaseDto);
  }

  @Get()
  getAll(){
    return this.plaseService.getAllPlases();
  }
}
