import React from 'react';
import ArticleItem from '../../molecules/ArticleItem';
import classes from './index.module.scss';

const ArticleSummary = () => (
    <ul className={classes['article-list']}>
        <ArticleItem />
    </ul>
);

export default ArticleSummary;