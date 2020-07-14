import React from 'react';
import { Card, Typography, Button } from '@material-ui/core';
import classes from './Article.module.scss';
import Comments from '../Comments';

const Article = () => (
    <Card className={classes.article}>
        <Typography component="h2" variant="h4">This is article title</Typography>
        <Typography component="p" variant="body1">This is article body</Typography>
        <Button className={classes['edit-btn']} variant="outlined">Edit</Button>
        <Comments />
    </Card>
);

export default Article;