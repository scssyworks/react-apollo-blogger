import gql from 'graphql-tag';

export const POST_COMMENT = gql`
    mutation postComment($title: String!, $description: String!, $articleId: ID!, $userId: ID!) {
        addComment(title: $title, description: $description, articleId: $articleId, userId: $userId) {
            id
        }
    }
`;