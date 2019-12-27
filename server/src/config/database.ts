import { Options } from 'sequelize'

const config: Options = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true
    // underscoredAll: true //removed in V5
  }
}

export default config
