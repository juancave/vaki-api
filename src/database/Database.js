class Database {
  constructor() {
    this.entities = [];
  }

  getAll() {
    return this.entities;
  }

  getById(id) {
    return this.entities.find((element) => element.id === Number(id));
  }

  getByProp(prop, value) {
    return this.entities.find((element) => element[prop] === value);
  }

  save(entity) {
    const generatedId = (this.entities[this.entities.length - 1] || { id: 0 }).id + 1;
    this.entities.push({
      ...entity,
      id: generatedId,
    });
  }

  delete(id) {
    return this.entities.filter((entity) => entity.id !== id);
  }

  update(id, newEntity) {
    const entityIndex = this.entities.findIndex((entity) => entity.id === Number(id));

    if (entityIndex !== -1) {
      this.entities[entityIndex] = newEntity;
    }
  }
}

export default Database;
