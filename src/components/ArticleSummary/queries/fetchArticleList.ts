import gql from 'graphql-tag';

export interface ArticleListData {
    articles: {
        id: string;
        title: string;
        content: string;
        comments: {
            id: string;
            title: string;
            description: string;
            user: {
                id: string;
            };
        };
    }[];
}

export const FETCH_LIST = gql`
    query fetchArticleList($userId: ID!) {
        articles(userId: $userId) {
            id
            title
            content
            comments {
                id
                title
                description
                user {
                    firstName
                }
            }
        }
    }
`;