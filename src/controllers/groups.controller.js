import groupsService from '../services/groups.service.js';

const getAll = (_req, res) => {
  try {
    const data = groupsService.getAll();

    return res.status(200).send({
      data,
    });
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
};

const getById = (req, res) => {
  try {
    const data = groupsService.getById(req.params.id);

    return res.status(200).send({
      data,
    });
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
};

const create = (req, res) => {
  try {
    return res.send(groupsService.create(req.body));
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
};

const update = (req, res) => {
  try {
    return res.send(groupsService.update(req.params, req.body));
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
};

export default {
  getAll,
  getById,
  create,
  update,
};
