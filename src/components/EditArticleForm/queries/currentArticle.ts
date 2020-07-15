import gql from 'graphql-tag';

export interface CurrentArticle {
    article: {
        title: string;
        description: string;
    };
}

export const CURRENT_ARTICLE = gql`
    query getArticle($id: ID!) {
        article(id: $id) {
            title
            description
        }
    }
`;