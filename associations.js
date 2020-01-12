module.exports = function (models) {
    models.posts.belongsTo(models.users,{foreignKey:'idOwner'});
    models.users.hasMany(models.posts,{foreignKey:'idOwner'});
    models.posts.belongsTo(models.tags, {foreignKey:'idTag'});
    models.tags.hasMany(models.posts,{foreignKey:'idTag'});
    models.posts.belongsTo(models.statuses, {foreignKey:'idStatus'});
    models.statuses.hasMany(models.posts,{foreignKey:'idStatus'});

}