import React, { ChangeEvent, FormEvent } from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import classes from './SignUpForm.module.scss';
import { useQuery, useMutation } from '@apollo/client';
import { CURRENT_USER, CurrentUser } from './queries/getCurrentUserQuery';
import { SET_USER_NAME, SET_FIRST_NAME, SET_LAST_NAME, SET_USER_ID } from './mutations/setCurrentUser';
import { SUBMIT_FORM } from './mutations/submitForm';

type MutationFn = (...args: any[]) => Promise<any>;

const setField = (e: ChangeEvent<HTMLInputElement>, fieldName: string, mutate: MutationFn) => {
    const value = e.target.value;
    mutate({
        variables: {
            [fieldName]: value
        }
    });
}

const submitForm = (e: FormEvent<HTMLFormElement>, user: CurrentUser, mutate: MutationFn) => {
    const { firstName, lastName, username } = user;
    e.preventDefault();
    mutate({
        variables: {
            firstName,
            lastName,
            username
        }
    });
}

type pushFn = (url: string) => void;

const SignUpForm = ({ className, history }: { className: string, history: { push: pushFn } }) => {
    const { data } = useQuery<CurrentUser>(CURRENT_USER);
    const [setUsername] = useMutation(SET_USER_NAME);
    const [setFirstName] = useMutation(SET_FIRST_NAME);
    const [setLastName] = useMutation(SET_LAST_NAME);
    const [setCurrentUserId] = useMutation(SET_USER_ID);
    const [submitUser] = useMutation(SUBMIT_FORM, {
        onCompleted: async ({ createUser }: { createUser: { id: string } }) => {
            // Reset fields
            await setFirstName({ variables: { firstName: '' } });
            await setLastName({ variables: { lastName: '' } });
            await setUsername({ variables: { username: '' } });
            await setCurrentUserId({ variables: { id: createUser.id } });
            // Navigate
            history.push('/posts');
        }
    });
    return (
        <Card className={className}>
            <form className={classes.form} noValidate autoComplete="off" onSubmit={
                (e: FormEvent<HTMLFormElement>) => submitForm(e, data as CurrentUser, submitUser)
            }>
                <div className={classes.controls}>
                    <TextField label="First Name" value={data?.firstName} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'firstName', setFirstName)
                    } />
                    <TextField label="Last Name" value={data?.lastName} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'lastName', setLastName)
                    } />
                    <TextField label="username" value={data?.username} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'username', setUsername)
                    } />
                </div>
                <Button type="submit" className={classes['form-submit']} variant="contained" color="primary">Sign Up</Button>
            </form>
        </Card>
    );
};

export default SignUpForm;