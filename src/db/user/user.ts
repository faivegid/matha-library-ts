import { Model, DataTypes } from 'sequelize';
import BaseEntity from '../BaseEntity'
import { Sequelize } from 'sequelize-typescript';

export class User extends BaseEntity<string> {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const initUserTable = (sequelize: Sequelize) => {
User.init(
  {
    ...User.getBaseModelAttributes(),
    id:{
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize, 
    modelName: 'Users',
  }
);
}
