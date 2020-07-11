import React from 'react';
import { Typography } from '@material-ui/core';
import SignUpForm from '../../components/SignUpForm';
import classes from './index.module.scss';

const Home = () => (
    <section className="main-content">
        <Typography component="h2" variant="h6">
            Sign-up to create your personal blog
        </Typography>
        <SignUpForm className={classes['form-section']} />
    </section>
);

export default Home;