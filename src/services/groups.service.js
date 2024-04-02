import Exceptions from '../errors/index.js';
import Database from '../database/Database.js';

const groups = new Database();

const getAll = () => {
  const allGroups = groups.getAll();

  if (!allGroups || !allGroups.length) {
    throw new Exceptions.NotFound();
  }

  return allGroups;
};

const getById = (id) => {
  const group = groups.getById(id);

  if (!group) {
    throw new Exceptions.NotFound();
  }

  return group;
};

const validateFields = (attributes) => {
  const { name, color } = attributes;

  if (!name || !name.trim()) {
    throw new Exceptions.BadRequest('The field name is not valid');
  }

  if (!color || !color.trim()) {
    throw new Exceptions.BadRequest('The field color is not valid');
  }
};

const create = (body) => {
  const { name, color } = body;

  validateFields({
    name,
    color,
  });

  const element = groups.getByProp('name', name.toLowerCase());

  if (element) {
    throw new Exceptions.Conflict('The group already exists');
  }

  groups.save({
    name: name.toLowerCase(),
    color,
  });
};

const update = (params, body) => {
  const { id } = params;
  const { name, color } = body;

  validateFields({
    name,
    color,
  });

  const group = getById(id);

  const element = groups.getByProp('name', name.toLowerCase());

  if (element && element.id !== Number(id)) {
    throw new Exceptions.Conflict('The group already exists');
  }

  groups.update(id, {
    ...group,
    name: name.toLowerCase(),
    color,
  });
};

export default {
  getAll,
  getById,
  create,
  update,
};
