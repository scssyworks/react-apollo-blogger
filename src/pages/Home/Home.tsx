import React from 'react';
import { Typography } from '@material-ui/core';
import SignUpForm from '../../components/SignUpForm';
import classes from './Home.module.scss';

const Home = ({ history }: { history: any }) => (
    <section className="main-content">
        <Typography component="h2" variant="h6">
            Sign-up to create your personal blog
        </Typography>
        <SignUpForm className={classes['form-section']} history={history} />
    </section>
);

export default Home;