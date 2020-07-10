const { RESTDataSource } = require('apollo-datasource-rest');

class Comments extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'http://localhost:3004/';
    }
    async getComments(articleId) {
        return this.get(`articles/${articleId}/comments`);
    }
    async addComment(args) {
        return this.post(`comments`, args);
    }
    async deleteComment(id) {
        return this.delete(`comments/${id}`);
    }
    async editComment(args) {
        const { id } = args;
        return this.patch(`comments/${id}`, args);
    }
}

module.exports = Comments;