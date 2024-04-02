import groupsService from '../services/groups.service.js';

const getAll = (_req, res) => {
  const data = groupsService.getAll();

  if (!data || !data.length) {
    return res.status(404).send();
  }

  return res.status(200).send({
    data,
  });
};

const create = (req, res) => {
  try {
    return res.send(groupsService.create(req.body));
  } catch (error) {
    return res.status(error.statusCode).send(error.message);
  }
};

export default {
  getAll,
  create,
};
