import groupsService from "../services/groups.service.js"

const getAll = (_req, res) => {
  const data = groupsService.getAll()

  return res.status(200).send({
    data
  })
}

const create = (req, res) => {
  return res.status(200).send(groupsService.create(req.body))
}

export default {
  getAll,
  create,
}
