module.exports = (sequelize, Sequelize) => {
    const Status = sequelize.define('status', {
        idStatus: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        label: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    return Status;
}