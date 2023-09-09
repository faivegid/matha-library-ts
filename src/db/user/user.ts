import { Model, DataTypes } from 'sequelize';
import BaseEntity from '../BaseEntity'
import sequelize  from '../db-context'; // Import your Sequelize instance
import { Mode } from 'fs';

class User extends BaseEntity<string> {
  firstName: string;
  lastName: string;
  email: string;
}

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
    }
  },
  {
    sequelize, 
    modelName: 'User',
  }
);