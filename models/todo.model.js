const bookshelf = require('../lib/bookshelf');
const User = require('./user.model');

const Todo = bookshelf.Model.extend({
    tableName: 'todos',
    user: () => {
        return this.belongsTo(User)
    },
});

module.exports = Todo;