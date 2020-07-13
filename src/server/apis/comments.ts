import { RESTDataSource } from 'apollo-datasource-rest';

export default class Comments extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    async getComments(articleId: string) {
        return this.get(`articles/${articleId}/comments`);
    }
    async addComment(args: any) {
        return this.post(`comments`, args);
    }
    async deleteComment(id: string) {
        return this.delete(`comments/${id}`);
    }
    async editComment(args: { id: string, [props: string]: any }) {
        const { id } = args;
        return this.patch(`comments/${id}`, args);
    }
}