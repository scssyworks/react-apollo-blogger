import React, { FC } from 'react';
import Article from '../../components/Article';
import { RouteComponentProps } from 'react-router-dom';

const ArticleDetail: FC<RouteComponentProps> = (props) => (
    <section className="main-content">
        <Article {...props} />
    </section>
);

export default ArticleDetail;