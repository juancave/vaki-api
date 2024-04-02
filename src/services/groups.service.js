import Exceptions from '../errors/index.js';

const bd = ['group1', 'group2'];

const getAll = () => bd;

const create = (body) => {
  const { name } = body;

  if (!name) {
    throw new Exceptions.BadRequest('The field name is not valid');
  }

  if (bd.includes(name.toLowerCase())) {
    throw new Exceptions.Conflict('The group already exists');
  }

  bd.push(name.toLowerCase());
};

export default {
  getAll,
  create,
};
