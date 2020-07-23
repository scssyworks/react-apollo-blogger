import React, { FC, useState, useEffect } from 'react';
import { Card, Typography, TextField, Button } from '@material-ui/core';
import classes from './EditArticleForm.module.scss';
import { withUser, UserProps } from '../../hoc/withUser';
import { CurrentArticle } from './queries/currentArticle';
import { useEditArticle } from '../../hooks/useEditArticle';

const EditArticleForm: FC<UserProps> = withUser(({ loggedInUserId, history, params }) => {
    const editMode = Boolean(params.id);
    const { data, submitArticle } = useEditArticle<CurrentArticle, string>({
        variables: {
            id: params.id
        },
        skip: !editMode
    }, loggedInUserId!);
    const { article } = data;
    const loading = editMode && !Boolean(article);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const receivedTitle = article?.title || '';
    const receivedDescription = article?.description || '';
    useEffect(() => {
        if (editMode) {
            setTitle(receivedTitle);
            setDescription(receivedDescription);
        }
    }, [editMode, receivedTitle, receivedDescription]);

    return (
        <section className={classes['form-section']}>
            <Typography component="h2" variant="h6">Article Editor</Typography>
            <Card className={classes['form-card']}>
                <form noValidate autoComplete="off" onSubmit={async (e) => {
                    await submitArticle(e, {
                        title,
                        description
                    });
                    history?.push('/posts');
                }}>
                    <TextField value={title} className={classes['title-text']} label="Topic" variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                    <TextField value={description} label="Your text..." variant="outlined" multiline rows="4" onChange={(e) => setDescription(e.target.value)} />
                    <Button type="submit" className={classes['form-submit']} variant="contained" disabled={loading} disableElevation>Submit</Button>
                </form>
            </Card>
        </section>
    );
});

export default EditArticleForm;