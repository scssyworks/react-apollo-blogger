import React from 'react';
import ArticleItem from '../../molecules/ArticleItem';
import classes from './ArticleSummary.module.scss';
import { useQuery } from 'react-apollo';
import { FETCH_LIST, ArticleListData } from './queries/fetchArticleList';
import Loader from '../../atoms/Loader';
import { withUser } from '../../hoc/withUser';

const ArticleSummary = withUser(({ history, loggedInUserId }: { history: any, loggedInUserId: string }) => {
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
                ({ title, description, id }) => <ArticleItem key={id} history={history} title={title} content={description} />
            )}
        </ul>
    );
});

export default ArticleSummary;