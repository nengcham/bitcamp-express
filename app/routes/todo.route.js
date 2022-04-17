const { add, todolist } = require('../controllers/todo.controller');
module.exports = x => {x.app.post(`${x.url}/add`, add)
                       x.app.get(`${x.url}/list`, todolist)}