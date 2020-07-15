import gql from 'graphql-tag';

export const SUBMIT_ARTICLE = gql`
    mutation submitArticle($title: String!, $description: String!, $userId: ID!) {
        addArticle(title: $title, description: $description, userId: $userId) {
            id
        }
    }
`;

export const SUBMIT_MODIFICATION = gql`
    mutation submitModification($title: String!, $description: String!, $id: ID!) {
        updateArticle(title: $title, description: $description, id: $id) {
            id
        }
    }
`;