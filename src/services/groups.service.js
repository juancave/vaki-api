import Exceptions from '../errors/index.js';
import Database from '../bd/Database.js';

const groups = new Database();

const getAll = () => groups.getAll();

const getById = (id) => groups.getById(Number(id));

const create = (body) => {
  const { name } = body;

  if (!name) {
    throw new Exceptions.BadRequest('The field name is not valid');
  }

  const element = groups.getByProp('name', name.toLowerCase());

  if (element) {
    throw new Exceptions.Conflict('The group already exists');
  }

  groups.save({
    name: name.toLowerCase(),
  });
};

export default {
  getAll,
  getById,
  create,
};
