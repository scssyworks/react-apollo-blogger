import React from 'react';
import ArticleItem from '../../molecules/ArticleItem';
import classes from './index.module.scss';
import { useQuery } from 'react-apollo';
import { GET_CURRENT_USER_ID, CurrentUserId } from './queries/getCurrentUserId';
import { FETCH_LIST, ArticleListData } from './queries/fetchArticleList';
import Loader from '../../atoms/Loader';

const ArticleSummaryData = ({ history, loggedInUserId }: { history: any, loggedInUserId: string }) => {
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
                ({ title, content, id }) => <ArticleItem key={id} history={history} title={title} content={content} />
            )}
        </ul>
    );
};

const ArticleSummary = ({ history }: { history: any }) => {
    // get current user id
    const { data: userData } = useQuery<CurrentUserId>(GET_CURRENT_USER_ID);
    if (!userData?.loggedInUserId) {
        return <Loader />
    }
    return <ArticleSummaryData history={history} loggedInUserId={userData.loggedInUserId} />
};

export default ArticleSummary;