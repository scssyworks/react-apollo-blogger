const { RESTDataSource } = require('apollo-datasource-rest');

class Users extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    createUser(args) {
        return this.post(`users`, args);
    }
    getUser(id) {
        return this.get(`users/${id}`);
    }
}

module.exports = Users;