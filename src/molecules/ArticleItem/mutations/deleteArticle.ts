import gql from 'graphql-tag';

export const DELETE_ARTICLE = gql`
    mutation deleteCurrentArticle($id: ID!) {
        deleteArticle(id: $id) {
            id
        }
    }
`;
