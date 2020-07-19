import React, { Fragment } from 'react';
import classes from './Comments.module.scss';
import { TextField, Button } from '@material-ui/core';
import { Comment as UserComment, EXTENDED_ARTICLE } from '../Article/queries/extendedArticle';
import { useMutation } from '@apollo/client';
import { POST_COMMENT } from './mutations/postComment';


const Comments = ({ data, userId, articleId }: { data: UserComment[], userId: string, articleId: string }) => {
    let inputRef: HTMLInputElement;
    const [postComment] = useMutation(POST_COMMENT);
    return (
        <section className={classes.comments}>
            <TextField inputRef={ref => inputRef = ref} id="standard-basic" label="Write a comment" multiline />
            <Button onClick={async () => {
                await postComment({
                    variables: {
                        title: '',
                        description: inputRef.value,
                        articleId,
                        userId
                    },
                    refetchQueries: [
                        {
                            query: EXTENDED_ARTICLE,
                            variables: {
                                id: articleId
                            }
                        }
                    ]
                });
            }} className={classes['comment-btn']} variant="contained" disableElevation>Comment</Button>
            {
                data.length
                    ? data.map(
                        ({ user, title, description, id }: UserComment) => (
                            <Fragment key={id}>
                                <p><strong>{`${user.firstName} ${user.lastName}`}:</strong> {title}</p>
                                <p>{description}</p>
                            </Fragment>
                        )
                    )
                    : <p>There are no comments to show</p>
            }
        </section>
    );
};

export default Comments;