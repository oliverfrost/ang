const bookshelf = require('../lib/bookshelf');
const Todo = require('./todo.model');

const User = bookshelf.Model.extend({
    tableName: 'users',
    hasTimestamps: true,
    hasTimestamps: ['created_at', 'updated_at'],
    todos: () => this.hasMany(Todo)
});

module.exports = User;