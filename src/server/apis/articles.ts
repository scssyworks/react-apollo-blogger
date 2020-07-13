import { RESTDataSource } from 'apollo-datasource-rest';

export default class Articles extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    async getArticles(userId: string) {
        return this.get(`users/${userId}/articles`);
    }
    async getArticle(id: string) {
        return this.get(`articles/${id}`);
    }
    async addArticle(args: any) {
        return this.post(`articles`, args);
    }
    async deleteArticle(id: string) {
        return this.delete(`articles/${id}`);
    }
    async updateArticle(args: { id: string, [props: string]: any }) {
        const { id } = args;
        return this.patch(`articles/${id}`, args);
    }
}