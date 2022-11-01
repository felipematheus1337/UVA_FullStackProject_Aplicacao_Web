import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Usuario from '../models/Usuario';
import Aluno from '../models/Aluno';

const models = [Usuario, Aluno];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
