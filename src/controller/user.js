
let User = require('../model/user');

const UserController = class UserController {
      index = async(req, res) => {
        let users = await User.find();
         res.json(400,users);
    }

    view = (req, res) => {
        console.log('view');
    }

    update = (req, res) => {
        console.log('get list');
    }

    create = (req, res) => {
        console.log('create');
    }
}
module.exports = new UserController();
