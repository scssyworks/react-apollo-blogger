import { useQuery, QueryHookOptions, useMutation } from "@apollo/client";
import { CURRENT_ARTICLE } from "../../components/EditArticleForm/queries/currentArticle";
import { SUBMIT_ARTICLE, SUBMIT_MODIFICATION } from "../../components/EditArticleForm/mutations/submitArticle";
import { FormEvent } from "react";
import { FETCH_LIST } from "../../components/ArticleSummary/queries/fetchArticleList";

interface FormFields {
    title: string;
    description: string;
}

export function useEditArticle<T, U extends string>(config: QueryHookOptions<T, Record<string, any>>, userId: U) {
    const { data = {} as T, loading } = useQuery(CURRENT_ARTICLE, config);
    const paramId = config.variables?.id;
    const mutationQuery = config.skip ? SUBMIT_ARTICLE : SUBMIT_MODIFICATION;
    const [submitForm] = useMutation(mutationQuery);
    const submitArticle = (e: FormEvent<HTMLFormElement>, { title, description }: Partial<FormFields>) => {
        e.preventDefault();
        return submitForm({
            variables: {
                title,
                description,
                [config.skip ? 'userId' : 'id']: config.skip ? userId : paramId
            },
            refetchQueries: [{ query: FETCH_LIST, variables: { userId } }]
        });
    }
    return {
        data,
        loading,
        submitArticle
    };
};