import React from 'react';
import { useMutation } from '@apollo/client';
import { Card, Typography, ButtonGroup, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import classes from './ArticleItem.module.scss';
import { Link } from 'react-router-dom';
import { DELETE_ARTICLE } from './mutations/deleteArticle';
import { FETCH_LIST } from '../../components/ArticleSummary/queries/fetchArticleList';

const ArticleItem = ({ history, title, content, id, loggedInUserId }: {
    history: {
        push: (url: string) => void
    },
    title: string,
    content: string,
    id: string,
    loggedInUserId: string
}) => {
    const [deleteArticle] = useMutation(DELETE_ARTICLE);
    return (
        <li className={classes['article-list-item']}>
            <Card className={classes['article-item']}>
                <Typography component="h2" variant="h6">
                    <Link className={classes['article-title']} to="/article">{title}</Link>
                </Typography>
                <Typography component="p" variant="subtitle1">{content}</Typography>
                <ButtonGroup size="small" variant="text" color="inherit" aria-label="text primary button group">
                    <Button className={classes['btn-color']} onClick={() => history.push(`/article/edit/${id}`)}>
                        <Edit fontSize="small" color="inherit" />
                    </Button>
                    <Button className={classes['btn-color']} onClick={async () => {
                        await deleteArticle({
                            variables: {
                                id
                            },
                            refetchQueries: [
                                {
                                    query: FETCH_LIST,
                                    variables: {
                                        userId: loggedInUserId
                                    }
                                }
                            ]
                        });
                    }}>
                        <Delete fontSize="small" color="inherit" />
                    </Button>
                </ButtonGroup>
            </Card>
        </li>
    );
};

export default ArticleItem;