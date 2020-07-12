import React from 'react';
import { Card, Typography, ButtonGroup, Button } from '@material-ui/core';
import classes from './index.module.scss';
import { Link } from 'react-router-dom';

const ArticleItem = ({ history, title, content }: {
    history: {
        push: (url: string) => void
    },
    title: string,
    content: string
}) => (
        <li className={classes['article-list-item']}>
            <Card className={classes['article-item']}>
                <Typography component="h2" variant="h6">
                    <Link className={classes['article-title']} to="/article">{title}</Link>
                </Typography>
                <Typography component="p" variant="subtitle1">{content}</Typography>
                <ButtonGroup size="small" variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => history.push('/article/edit/testid')}>Edit</Button>
                    <Button>Delete</Button>
                </ButtonGroup>
            </Card>
        </li>
    );

export default ArticleItem