import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePlasesDto } from './dto/create-plases.dto';
import { PlasesService } from './plases.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Plase } from './plases.model';

@Controller('plases')
export class PlasesController {
  
  constructor(private plaseService: PlasesService ) {}

  @ApiOperation({
    summary: 'Создание нового объекта',
  })
  @ApiResponse({
    status: 200,
    description: 'Объект создан',
    type: Plase
  })
  @Post()
  create(@Body() plaseDto: CreatePlasesDto){
    return this.plaseService.createPlase(plaseDto);
  }

  @ApiOperation({
    summary: 'Получение всех объектов',
  })
  @ApiResponse({
    status: 200,
    description: 'Объекты получены',
    type: [Plase]
  })
  @Get()
  getAll(){
    return this.plaseService.getAllPlases();
  }
}
