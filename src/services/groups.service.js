import { BadRequest, Conflict } from '../errors/index.js'

const bd = ['group1', 'group2'];

const getAll = () => {
  return bd
}

const create = (body) => {
  const { name } = body

  if (!name) {
    throw new BadRequest('The field name is not valid')
  }

  if (bd.includes(name.toLowerCase())) {
    throw new Conflict('The group already exists')
  }

  bd.push(name.toLowerCase())
}

export default {
  getAll,
  create,
}
