export class BadRequest extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 400
  }
}

export class Conflict extends Error {
  constructor(message) {
    super(message)
    this.statusCode = 409
  }
}

export default {
  Conflict,
  BadRequest,
}
