import React, { FC } from 'react';
import { Card, Typography, ButtonGroup, Button } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import classes from './ArticleItem.module.scss';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useDeleteArticle } from '../../hooks/useDeleteArticle';

interface Props extends Partial<RouteComponentProps> {
    title: string;
    content: string;
    id: string;
    loggedInUserId?: string;
}

const ArticleItem: FC<Props> = ({ history, title, content, id, loggedInUserId }) => {
    const [deleteArticle] = useDeleteArticle({ id, userId: loggedInUserId });
    return (
        <li className={classes['article-list-item']}>
            <Card className={classes['article-item']}>
                <Typography component="h2" variant="h6">
                    <Link className={classes['article-title']} to={`/post/${id}`}>{title}</Link>
                </Typography>
                <Typography component="p" variant="subtitle1">{content}</Typography>
                <ButtonGroup size="small" variant="text" color="inherit" aria-label="text primary button group">
                    <Button className={classes['btn-color']} onClick={() => history?.push(`/article/edit/${id}`)}>
                        <Edit fontSize="small" color="inherit" />
                    </Button>
                    <Button className={classes['btn-color']} onClick={deleteArticle}>
                        <Delete fontSize="small" color="inherit" />
                    </Button>
                </ButtonGroup>
            </Card>
        </li>
    );
};

export default ArticleItem;