import gql from 'graphql-tag';

export const SET_FIRST_NAME = gql`
    mutation setFirstName($firstName: String!) {
        updateFirstName(firstName: $firstName) @client
    }
`;

export const SET_LAST_NAME = gql`
    mutation setLastName($lastName: String!) {
        updateLastName(lastName: $lastName) @client
    }
`;

export const SET_USER_NAME = gql`
    mutation setUsername($username: String!) {
        updateUsername(username: $username) @client
    }
`;

export const SET_USER_ID = gql`
    mutation setCurrentUserId($id: ID!) {
        setUserId(id: $id) @client
    }
`;