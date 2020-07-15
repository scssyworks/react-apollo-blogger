import React from 'react';
import EditArticleForm from '../../components/EditArticleForm';

const ArticleEdit = ({ history, match }: { history: any, match: { params: any } }) => (
    <section className="main-content">
        <EditArticleForm history={history} params={match.params} />
    </section>
);

export default ArticleEdit;