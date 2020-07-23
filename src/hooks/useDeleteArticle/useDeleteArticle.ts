import { useMutation } from '@apollo/client';
import { DELETE_ARTICLE } from '../../molecules/ArticleItem/mutations/deleteArticle';
import { FETCH_LIST } from '../../components/ArticleSummary/queries/fetchArticleList';

interface DeleteConfig {
    id: string;
    userId?: string;
}

export const useDeleteArticle = ({ id, userId }: DeleteConfig) => {
    const [deleteArticle] = useMutation(DELETE_ARTICLE);
    const deleteCurrentArticle = () => {
        deleteArticle({
            variables: {
                id
            },
            refetchQueries: [{ query: FETCH_LIST, variables: { userId } }]
        });
    }
    return [deleteCurrentArticle];
}