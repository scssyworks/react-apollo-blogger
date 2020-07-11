import React, { ChangeEvent, FormEvent } from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import classes from './index.module.scss';
import { useQuery, useMutation } from 'react-apollo';
import { CURRENT_USER, CurrentUser } from './queries/getCurrentUserQuery';
import { SET_USER_NAME, SET_FIRST_NAME, SET_LAST_NAME } from './mutations/setCurrentUser';
import { SUBMIT_FORM } from './mutations/submitForm';

type MutationFn = (...args: any[]) => Promise<any>;

const setField = (e: ChangeEvent<HTMLInputElement>, fieldName: string, mutation: MutationFn) => {
    const value = e.target.value;
    mutation({
        variables: {
            [fieldName]: value
        }
    });
}

const submitForm = (e: FormEvent<HTMLFormElement>, user: CurrentUser, mutation: MutationFn) => {
    const { firstName, lastName, username } = user;
    e.preventDefault();
    mutation({
        variables: {
            firstName,
            lastName,
            username
        }
    });
}

const SignUpForm = ({ className }: { className: string }) => {
    const { data } = useQuery<CurrentUser>(CURRENT_USER);
    console.log(data);
    const [setUsername] = useMutation(SET_USER_NAME);
    const [setFirstName] = useMutation(SET_FIRST_NAME);
    const [setLastName] = useMutation(SET_LAST_NAME);
    const [submitUser] = useMutation(SUBMIT_FORM);
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