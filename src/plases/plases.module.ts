import { PlasesService } from './plases.service';
import { PlasesController } from './plases.controller';


import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Plase } from './plases.model';

@Module({
  imports: [
    SequelizeModule.forFeature([Plase]),
  ],
  controllers: [PlasesController],
  providers: [PlasesService],
})
export class PlasesModule {}
