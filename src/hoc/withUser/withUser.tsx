import React from 'react';
import { CurrentUserId, GET_CURRENT_USER_ID } from './queries/getCurrentUserId';
import { useQuery } from '@apollo/client';
import Loader from '../../atoms/Loader';

export const withUser = (ParentComponent: any) => (props: any) => {
    const { data: userData } = useQuery<CurrentUserId>(GET_CURRENT_USER_ID);
    if (!userData?.loggedInUserId) {
        return <Loader />
    }
    const newProps = { ...props, loggedInUserId: userData?.loggedInUserId };
    return <ParentComponent {...newProps} />
};