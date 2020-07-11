import gql from 'graphql-tag';

export const SUBMIT_FORM = gql`
    mutation submitForm($firstName: String!, $lastName: String!, $username: String!) {
        createUser(firstName: $firstName, lastName: $lastName, username: $username) {
            id          
        }
    }
`;