import React from 'react';
import ArticleSummary from '../../components/ArticleSummary';
import { Button } from '@material-ui/core';
import classes from './index.module.scss';

const ArticleList = () => (
    <section className="main-content">
        <Button variant="contained" className={classes['create-new']} disableElevation>
            New
        </Button>
        <ArticleSummary />
    </section>
);

export default ArticleList;