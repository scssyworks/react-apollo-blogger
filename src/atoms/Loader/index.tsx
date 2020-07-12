import React from 'react';
import { CircularProgress } from '@material-ui/core';
import classes from './index.module.scss';

const Loader = () => (
    <div className={classes.loader}>
        <CircularProgress />
    </div>
);

export default Loader;