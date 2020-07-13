import React, { FormEvent } from 'react';
import { Card, Typography, TextField, Button } from '@material-ui/core';
import classes from './index.module.scss';
import { withUser } from '../../hoc/withUser';
import { useMutation } from 'react-apollo';
import { SUBMIT_ARTICLE } from './mutations/submitArticle';
import { FETCH_LIST } from '../ArticleSummary/queries/fetchArticleList';

const EditArticleForm = withUser(({ loggedInUserId, history }: {
    loggedInUserId: string,
    history: {
        push: (url: string) => void
    }
}) => {
    let titleRef: HTMLInputElement;
    let contentRef: HTMLInputElement;

    const [submitForm] = useMutation(SUBMIT_ARTICLE);

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
                            userId: loggedInUserId
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
                    <Button type="submit" className={classes['form-submit']} variant="contained" disableElevation>Submit</Button>
                </form>
            </Card>
        </section>
    );
});

export default EditArticleForm;