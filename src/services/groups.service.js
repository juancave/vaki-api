import Exceptions from '../errors/index.js';

const bd = [];

const getAll = () => bd;

const getById = (id) => bd.find((element) => element.id === Number(id));

const create = (body) => {
  const { name } = body;

  if (!name) {
    throw new Exceptions.BadRequest('The field name is not valid');
  }

  if (bd.some((element) => element.name === name.toLowerCase())) {
    throw new Exceptions.Conflict('The group already exists');
  }

  bd.push({
    name: name.toLowerCase(),
    id: (bd[bd.length - 1] || { id: 0 }).id + 1,
  });
};

export default {
  getAll,
  getById,
  create,
};
