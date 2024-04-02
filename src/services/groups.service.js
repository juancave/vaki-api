const bd = ['group1', 'group2'];

const getAll = () => {
  return bd
}

const create = (body) => {
  const { name } = body

  bd.push(name.toLowerCase())
}

export default {
  getAll,
  create,
}
