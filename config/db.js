const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'db_blog',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
        }
    });

let User = require('../models/User');
let Post = require('../models/Post');
let Tag = require('../models/Tag');
let Status = require('../models/Status');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.users = User(sequelize, Sequelize);
db.posts = Post(sequelize,Sequelize);
db.tags = Tag(sequelize,Sequelize);
db.statuses = Status(sequelize,Sequelize);

require('../associations')(db);


module.exports = db;