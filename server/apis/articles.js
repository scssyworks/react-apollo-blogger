const { RESTDataSource } = require('apollo-datasource-rest');

class Articles extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    async getArticles() {
        return this.get(`articles`);
    }
    async getArticle(id) {
        return this.get(`articles/${id}`);
    }
    async addArticle(args) {
        return this.post(`articles`, args);
    }
    async deleteArticle(id) {
        return this.delete(`articles/${id}`);
    }
    async updateArticle(args) {
        const { id } = args;
        return this.patch(`articles/${id}`, args);
    }
}

module.exports = Articles;