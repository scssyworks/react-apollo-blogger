import gql from 'graphql-tag';

export interface ExtendedArticle {
    article: {
        id: string;
        title: string;
        description: string;
        comments: Comment[];
    };
}

export interface Comment {
    title: string;
    description: string;
    user: {
        firstName: string;
        lastName: string;
    };
}

export const EXTENDED_ARTICLE = gql`
    query extendedArticle($id: ID!) {
        article(id: $id) {
            id
            title
            description
            comments {
                title
                description
                user {
                    firstName
                    lastName
                }
            }
        }
    }
`;