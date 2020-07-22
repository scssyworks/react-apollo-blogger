import React, { FC } from 'react';
import ArticleSummary from '../../components/ArticleSummary';
import { Button } from '@material-ui/core';
import classes from './ArticleList.module.scss';
import { RouteComponentProps } from 'react-router-dom';

const ArticleList: FC<RouteComponentProps> = ({ history }) => (
    <section className="main-content">
        <Button onClick={
            () => history.push('/article/new')
        } variant="contained" className={classes['create-new']} disableElevation>
            New
            </Button>
        <ArticleSummary history={history} />
    </section>
);

export default ArticleList;