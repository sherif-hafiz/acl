export class UserController {
    // NOTE: static method, easier for testing
    // Annotate methods
    static addUser(req, res) {
        // Reply with a hello world when no name param is provided
        res.send('Hello, World!!!');
    }
    getUsers(req, res) {
        console.log('Get users');
    }
    static getUserByID(req, res) {
        let { id } = req.params;
        res.send(`User's ID is, ${id}`);
    }
    updateUser(req, res) {
    }
    deleteUser(req, res) {
    }
}
