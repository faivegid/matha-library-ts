import { Sequelize } from 'sequelize-typescript';
import path from 'path';

const sequelize = new Sequelize({
  database: 'marthaLibraryDb',
  username: '',
  password: '',
  host: 'localhost',
  dialect: 'mysql'
});

const userModelPath = path.join(__dirname, 'src', 'db', 'user');
const bookModelPath = path.join(__dirname, 'src', 'models', 'book');

export default sequelize;