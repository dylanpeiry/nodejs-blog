module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define('post', {
        idPost: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        title: {
            type: Sequelize.STRING
        },
        content: {
            type: Sequelize.STRING
        },
        idOwner: {
            type: Sequelize.INTEGER,
            references: {
                model: 'User',
                key: 'idUser'
            }
        },
        idStatus: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Status',
                key: 'idStatus'
            }
        },
        idTag: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Tag',
                key: 'idTag'
            }
        }

    });

    return Post;
}