import React, { FC } from 'react';
import classes from './Header.module.scss';
import { Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header: FC<any> = () => (
    <header>
        <Paper className={classes.header} elevation={0}>
            <Typography variant="h5" component="h1">
                <Link className={classes.link} to="/posts">Personal Blog</Link>
            </Typography>
        </Paper>
    </header>
);

export default Header;