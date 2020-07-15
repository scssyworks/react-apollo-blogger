import React, { FormEvent, useEffect } from 'react';
import { Card, Typography, TextField, Button } from '@material-ui/core';
import classes from './EditArticleForm.module.scss';
import { withUser } from '../../hoc/withUser';
import { useMutation, useQuery } from '@apollo/client';
import { SUBMIT_ARTICLE, SUBMIT_MODIFICATION } from './mutations/submitArticle';
import { FETCH_LIST } from '../ArticleSummary/queries/fetchArticleList';
import { CURRENT_ARTICLE, CurrentArticle } from './queries/currentArticle';

const EditArticleForm = withUser(({ loggedInUserId, history, params }: {
    loggedInUserId: string,
    history: {
        push: (url: string) => void
    },
    params: { id: string }
}) => {
    let titleRef: HTMLInputElement;
    let contentRef: HTMLInputElement;
    let editMode = Boolean(params.id);
    let isButtonDisabled = editMode;
    const { data = {} as CurrentArticle } = useQuery<CurrentArticle>(CURRENT_ARTICLE, {
        variables: {
            id: params.id
        },
        skip: !editMode
    });
    console.log(data);
    const { article } = data;
    if (article) {
        isButtonDisabled = false;
    }
    useEffect(() => {
        if (editMode) {
            console.log(titleRef, contentRef, article?.title, article?.description);
            if (article?.title) {
                titleRef.value = article?.title;
            }
            if (article?.description) {
                contentRef.value = article?.description;
            }
        }
    });
    const [submitForm] = useMutation(editMode ? SUBMIT_MODIFICATION : SUBMIT_ARTICLE);

    return (
        <section className={classes['form-section']}>
            <Typography component="h2" variant="h6">Article Editor</Typography>
            <Card className={classes['form-card']}>
                <form noValidate autoComplete="off" onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    await submitForm({
                        variables: {
                            title: titleRef.value,
                            description: contentRef.value,
                            [editMode ? 'id' : 'userId']: editMode ? params.id : loggedInUserId
                        },
                        refetchQueries: [{
                            query: FETCH_LIST,
                            variables: {
                                userId: loggedInUserId
                            }
                        }]
                    });
                    history.push('/posts');
                }}>
                    <TextField inputRef={(ref: any) => titleRef = ref} className={classes['title-text']} label="Topic" variant="outlined" />
                    <TextField inputRef={(ref: any) => contentRef = ref} label="Your text..." variant="outlined" multiline rows="4" />
                    <Button type="submit" className={classes['form-submit']} variant="contained" disabled={isButtonDisabled} disableElevation>Submit</Button>
                </form>
            </Card>
        </section>
    );
});

export default EditArticleForm;