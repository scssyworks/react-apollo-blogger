import React from 'react';
import ArticleSummary from '../../components/ArticleSummary';
import { Button } from '@material-ui/core';
import classes from './ArticleList.module.scss';

const ArticleList = ({ history }: {
    history: {
        push: (url: string) => void
    }
}) => (
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