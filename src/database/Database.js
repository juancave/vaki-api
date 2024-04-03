class Database {
  constructor() {
    this.entities = [];
  }

  getAll() {
    return this.entities.filter((element) => !element.deletedAt);
  }

  getById(id) {
    return this.entities.find((element) => element.id === Number(id) && !element.deletedAt);
  }

  getByProp(prop, value) {
    return this.entities.find((element) => element[prop] === value && !element.deletedAt);
  }

  save(entity) {
    const generatedId = (this.entities[this.entities.length - 1] || { id: 0 }).id + 1;
    this.entities.push({
      ...entity,
      id: generatedId,
    });
  }

  softDelete(id) {
    const entityIndex = this.entities.findIndex((entity) => entity.id === Number(id));

    if (entityIndex !== -1) {
      this.entities[entityIndex] = {
        ...this.entities[entityIndex],
        deletedAt: new Date(),
      };
    }
  }

  delete(id) {
    return this.entities.filter((entity) => entity.id !== Number(id));
  }

  update(id, newEntity) {
    const entityIndex = this.entities.findIndex((entity) => entity.id === Number(id));

    if (entityIndex !== -1) {
      this.entities[entityIndex] = newEntity;
    }
  }
}

export default Database;
