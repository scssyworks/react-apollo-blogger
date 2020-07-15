import React from 'react';
import { useQuery } from '@apollo/client';
import { Card, Typography, Button } from '@material-ui/core';
import classes from './Article.module.scss';
import Comments from '../Comments';
import { EXTENDED_ARTICLE, ExtendedArticle } from './queries/extendedArticle';
import Loader from '../../atoms/Loader';

const Article = ({ match, history }: {
    match: {
        params: {
            id: string;
        };
    },
    history: {
        push: (url: string) => void;
    }
}) => {
    const { data, loading } = useQuery<ExtendedArticle>(EXTENDED_ARTICLE, {
        variables: {
            id: match.params.id
        }
    });
    if (loading) {
        return <Loader />
    }
    const { article } = data as ExtendedArticle;
    return (
        <Card className={classes.article}>
            <Typography component="h2" variant="h4">{article.title}</Typography>
            <Typography component="p" variant="body1">{article.description}</Typography>
            <Button className={classes['edit-btn']} variant="outlined" onClick={
                () => history.push(`/article/edit/${match.params.id}`)
            }>Edit</Button>
            <Comments data={article.comments} />
        </Card>
    );
};

export default Article;