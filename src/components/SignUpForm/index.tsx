import React from 'react';
import { Card, TextField, Button } from '@material-ui/core';
import classes from './index.module.scss';


const SignUpForm = ({ className }: { className: string }) => (
    <Card className={className}>
        <form className={classes.form} noValidate autoComplete="off">
            <div className={classes.controls}>
                <TextField label="First Name" />
                <TextField label="Last Name" />
                <TextField label="username" />
            </div>
            <Button className={classes['form-submit']} variant="contained" color="primary">Sign Up</Button>
        </form>
    </Card>
);

export default SignUpForm;