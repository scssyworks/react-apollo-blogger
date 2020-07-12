import gql from 'graphql-tag';

export interface ArticleListData {
    articles: {
        id: string;
        title: string;
        description: string;
    }[];
}

export const FETCH_LIST = gql`
    query fetchArticleList($userId: ID!) {
        articles(userId: $userId) {
            id
            title
            description
        }
    }
`;