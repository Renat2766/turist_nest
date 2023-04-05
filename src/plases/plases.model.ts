import { Column, DataType, Model, Table } from "sequelize-typescript";

interface PlaseCreationAttrs {
  id: number;
  title: string;
  description: string;
  image: string;
}

@Table({tableName: 'plases'})
export class Plase extends Model <Plase, PlaseCreationAttrs> {
  @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true, unique: true})
  id: number;
  @Column({type: DataType.STRING, unique: true, allowNull: false})
  title: string;
  @Column({type: DataType.STRING,allowNull: false})
  description: string;
  @Column({type: DataType.STRING,allowNull: false})
  image: string;
}
  