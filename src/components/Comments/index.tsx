import React from 'react';
import classes from './index.module.scss';
import { TextField } from '@material-ui/core';


const Comments = () => (
    <section className={classes.comments}>
        <TextField id="standard-basic" label="Write a comment" multiline />
        <p>There are no comments to show</p>
    </section>
);

export default Comments;