import React, { useEffect, FC, useRef } from 'react';
import { Card, Typography, TextField, Button } from '@material-ui/core';
import classes from './EditArticleForm.module.scss';
import { withUser, UserProps } from '../../hoc/withUser';
import { CurrentArticle } from './queries/currentArticle';
import { useEditArticle } from '../../hooks/useEditArticle';

const EditArticleForm: FC<UserProps> = withUser(({ loggedInUserId, history, params }) => {
    let titleRef = useRef<HTMLInputElement>(null);
    let contentRef = useRef<HTMLInputElement>(null);
    let editMode = Boolean(params.id);
    let isButtonDisabled = editMode;
    const { data, submitArticle } = useEditArticle<CurrentArticle, string>({
        variables: {
            id: params.id
        },
        skip: !editMode
    }, loggedInUserId!);
    const { article } = data;
    if (article) {
        isButtonDisabled = false;
    }
    useEffect(() => {
        if (editMode) {
            if (article?.title && titleRef.current) {
                titleRef.current.value = article?.title;
            }
            if (article?.description && contentRef.current) {
                contentRef.current.value = article?.description;
            }
        }
    });

    return (
        <section className={classes['form-section']}>
            <Typography component="h2" variant="h6">Article Editor</Typography>
            <Card className={classes['form-card']}>
                <form noValidate autoComplete="off" onSubmit={async (e) => {
                    await submitArticle(e, {
                        title: titleRef.current?.value,
                        description: contentRef.current?.value
                    });
                    history?.push('/posts');
                }}>
                    <TextField inputRef={titleRef} className={classes['title-text']} label="Topic" variant="outlined" />
                    <TextField inputRef={contentRef} label="Your text..." variant="outlined" multiline rows="4" />
                    <Button type="submit" className={classes['form-submit']} variant="contained" disabled={isButtonDisabled} disableElevation>Submit</Button>
                </form>
            </Card>
        </section>
    );
});

export default EditArticleForm;