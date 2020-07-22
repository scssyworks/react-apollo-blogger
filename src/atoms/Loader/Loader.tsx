import React, { FC } from 'react';
import { CircularProgress } from '@material-ui/core';
import classes from './Loader.module.scss';

const Loader: FC = () => (
    <div data-testid="loader" className={classes.loader}>
        <CircularProgress />
    </div>
);

export default Loader;