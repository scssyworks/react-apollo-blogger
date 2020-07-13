import { RESTDataSource } from 'apollo-datasource-rest';

export default class Users extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    createUser(args: any) {
        return this.post(`users`, args);
    }
    getUser(id: string) {
        return this.get(`users/${id}`);
    }
}