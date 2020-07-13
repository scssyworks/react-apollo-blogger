import gql from 'graphql-tag';

export interface CurrentUserId {
    loggedInUserId: string;
}

export const GET_CURRENT_USER_ID = gql`
    query {
        loggedInUserId @client
    }
`;