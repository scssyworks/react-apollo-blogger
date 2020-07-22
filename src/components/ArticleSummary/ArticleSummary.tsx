import React, { FC } from 'react';
import ArticleItem from '../../molecules/ArticleItem';
import classes from './ArticleSummary.module.scss';
import { useQuery } from '@apollo/client';
import { FETCH_LIST, ArticleListData } from './queries/fetchArticleList';
import Loader from '../../atoms/Loader';
import { withUser, UserProps } from '../../hoc/withUser';

const ArticleSummary: FC<UserProps> = withUser(({ history, loggedInUserId }) => {
    // get list of articles for current user
    const { data: articleData, loading } = useQuery<ArticleListData>(FETCH_LIST, {
        variables: {
            userId: loggedInUserId
        }
    });
    if (loading) {
        return <Loader />;
    }
    if (articleData?.articles.length === 0) {
        return <p>Your articles will show up here!</p>;
    }
    return (
        <ul className={classes['article-list']}>
            {articleData?.articles.map(
                ({ title, description, id }) => <ArticleItem
                    key={id}
                    history={history}
                    title={title}
                    content={description}
                    id={id}
                    loggedInUserId={loggedInUserId}
                />
            )}
        </ul>
    );
});

export default ArticleSummary;