import React, { ChangeEvent } from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import classes from './index.module.scss';
import { useQuery, useMutation } from 'react-apollo';
import { CURRENT_USER, CurrentUser } from './queries/getCurrentUserQuery';
import { SET_LOCAL_USER } from './mutations/setCurrentUser';

type MutationFn = (...args: any[]) => Promise<any>;

const setField = (e: ChangeEvent<HTMLInputElement>, fieldName: string, mutation: MutationFn) => {
    const value = e.target.value;
    mutation({
        variables: {
            [fieldName]: value
        }
    });
}

const SignUpForm = ({ className }: { className: string }) => {
    const { data } = useQuery<CurrentUser>(CURRENT_USER);
    const [setLocalUser] = useMutation(SET_LOCAL_USER);
    return (
        <Card className={className}>
            <form className={classes.form} noValidate autoComplete="off">
                <div className={classes.controls}>
                    <TextField label="First Name" value={data?.firstName} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'firstName', setLocalUser)
                    } />
                    <TextField label="Last Name" value={data?.lastName} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'lastName', setLocalUser)
                    } />
                    <TextField label="username" value={data?.username} onChange={
                        (e: ChangeEvent<HTMLInputElement>) => setField(e, 'username', setLocalUser)
                    } />
                </div>
                <Button className={classes['form-submit']} variant="contained" color="primary">Sign Up</Button>
            </form>
        </Card>
    );
};

export default SignUpForm;