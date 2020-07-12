import React from 'react';
import { Card, Typography, ButtonGroup, Button } from '@material-ui/core';
import classes from './index.module.scss';
import { Link } from 'react-router-dom';

const ArticleItem = () => (
    <li>
        <Card className={classes['article-item']}>
            <Typography component="h2" variant="h6">
                <Link className={classes['article-title']} to="/article">Some title</Link>
            </Typography>
            <Typography component="p" variant="subtitle1">Some single line description</Typography>
            <ButtonGroup size="small" variant="text" color="primary" aria-label="text primary button group">
                <Button>Edit</Button>
                <Button>Delete</Button>
            </ButtonGroup>
        </Card>
    </li>
);

export default ArticleItem