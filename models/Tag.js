module.exports = (sequelize, Sequelize) => {
    const Tag = sequelize.define('tag', {
        idTag: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        label: {
            type: Sequelize.STRING
        }

    }, {
        timestamps: false
    });

    return Tag;
}