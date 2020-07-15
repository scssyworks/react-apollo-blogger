import React from 'react';
import Article from '../../components/Article';

const ArticleDetail = (props: any) => (
    <section className="main-content">
        <Article {...props} />
    </section>
);

export default ArticleDetail;