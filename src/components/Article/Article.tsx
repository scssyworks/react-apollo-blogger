import React, { FC } from 'react';
import { useQuery } from '@apollo/client';
import { Card, Typography, Button } from '@material-ui/core';
import classes from './Article.module.scss';
import Comments from '../Comments';
import { EXTENDED_ARTICLE, ExtendedArticle } from './queries/extendedArticle';
import Loader from '../../atoms/Loader';
import { RouteComponentProps } from 'react-router-dom';

const Article: FC<Pick<RouteComponentProps, 'history' | 'match'>> = ({ match, history }) => {
    const currentParams = match?.params!;
    const currentId = (currentParams as { id: string }).id;
    const { data, loading } = useQuery<ExtendedArticle>(EXTENDED_ARTICLE, {
        variables: {
            id: currentId
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
                () => history?.push(`/article/edit/${currentId}`)
            }>Edit</Button>
            <Comments data={article.comments} articleId={currentId} />
        </Card>
    );
};

export default Article;