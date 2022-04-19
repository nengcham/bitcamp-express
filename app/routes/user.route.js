const { signup, login, userlist, profile } = require('../controllers/user.controller');
const { verifyToken } = require('../routes/middlewares');

module.exports = x => {
    x.app.post(`${x.url}/signup`, signup)
    x.app.post(`${x.url}/login`, login)
    x.app.get(`${x.url}/list`, verifyToken, userlist)
    x.app.get(`${x.url}/profile/:id`, profile)} ;

