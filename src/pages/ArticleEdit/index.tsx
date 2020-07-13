import React from 'react';
import EditArticleForm from '../../components/EditArticleForm';

const ArticleEdit = ({ history }: { history: any }) => (
    <section className="main-content">
        <EditArticleForm history={history} />
    </section>
);

export default ArticleEdit;