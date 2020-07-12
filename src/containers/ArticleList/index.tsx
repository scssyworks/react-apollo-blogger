import React from 'react';
import ArticleSummary from '../../components/ArticleSummary';
import { Button } from '@material-ui/core';
import classes from './index.module.scss';

const ArticleList = ({ history }: { history: any }) => (
    <section className="main-content">
        <Button variant="contained" className={classes['create-new']} disableElevation>
            New
        </Button>
        <ArticleSummary history={history} />
    </section>
);

export default ArticleList;