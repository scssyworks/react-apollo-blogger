import React, { FC } from 'react';
import { CurrentUserId, GET_CURRENT_USER_ID } from './queries/getCurrentUserId';
import { useQuery } from '@apollo/client';
import Loader from '../../atoms/Loader';
import { RouteComponentProps } from 'react-router-dom';

interface GenericProps extends Partial<RouteComponentProps> {
    [props: string]: any;
}

export interface UserProps extends GenericProps {
    loggedInUserId?: string;
}

export const withUser = (ParentComponent: FC<UserProps>) => (props: GenericProps) => {
    const { data: userData } = useQuery<CurrentUserId>(GET_CURRENT_USER_ID);
    if (!userData?.loggedInUserId) {
        return <Loader />
    }
    const newProps = { ...props, loggedInUserId: userData?.loggedInUserId };
    return <ParentComponent {...newProps} />
};