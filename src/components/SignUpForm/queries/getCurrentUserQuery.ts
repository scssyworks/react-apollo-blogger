import gql from 'graphql-tag';

export interface CurrentUser {
    firstName: string;
    lastName: string;
    username: string;
}

export const CURRENT_USER = gql`
    query {
        firstName @client
        lastName @client
        username @client
    }
`;