import gql from 'graphql-tag';

export const SET_LOCAL_USER = gql`
    mutation setLocalUser($firstName: String, $lastName: String, $username: String) {
        updateUser(firstName: $firstName, lastName: $lastName, username: $username) @client
    }
`;
