/* eslint-disable @typescript-eslint/camelcase */
import Sequelize, { Model, ModelAttributes } from 'sequelize'

class User extends Model {
  public name
  public email
  public password
  public password_hash
  public provider

  public readonly createdAt!: Date
  public readonly updatedAt!: Date

  static init(sequelize): User {
    const attributes: ModelAttributes = {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.VIRTUAL,
      password_hash: Sequelize.STRING,
      provider: Sequelize.BOOLEAN
    }
    super.init.call(attributes, { sequelize })

    return this
  }
}

export default User
