import React, { FC } from 'react';
import EditArticleForm from '../../components/EditArticleForm';
import { RouteComponentProps } from 'react-router-dom';

const ArticleEdit: FC<RouteComponentProps> = ({ history, match }) => (
    <section className="main-content">
        <EditArticleForm history={history} params={match.params} />
    </section>
);

export default ArticleEdit;