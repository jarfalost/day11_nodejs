const config = require("../config/db");

const Datatype = require("sequelize");
const sequelize = new Datatype(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        pool:{
            max: config.pool.max,
            min: config.pool.min,
            acquire: config.pool.acquire
        }
    }
)

const db = {};
db.Datatype = Datatype;
db.sequelize = sequelize;

db.student = require('./student.model')(sequelize, Datatype);
db.university = require('./university.model')(sequelize, Datatype);

db.setting.belongsTo(db.student);

//Many to Many


module.exports = db;