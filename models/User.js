module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        idRole: {
            type: Sequelize.INTEGER
        }

    },{
        timestamps: false
    });

    return User;
}