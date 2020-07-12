import gql from 'graphql-tag';

export const SUBMIT_ARTICLE = gql`
    mutation submitArticle($title: String!, $description: String!, $userId: ID!) {
        addArticle(title: $title, description: $description, userId: $userId) {
            id
        }
    }
`;