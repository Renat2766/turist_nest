import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PlaseCreationAttrs {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Table({tableName: 'plases'})
export class Plase extends Model <Plase, PlaseCreationAttrs> {
  @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
  @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
  id: number;
  @ApiProperty({example: 'Каток Медео', description: 'Заголовок объекта'})
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;
  @ApiProperty({example: 'Самый высокогорный каток', description: 'Описание объекта'})
  @Column({type: DataType.STRING,allowNull: false})
  description: string;
  @ApiProperty({example: './dist/images/img1.jpg', description: 'Изображение объекта'})
  @Column({type: DataType.STRING,allowNull: false})
  image: string;
}
  