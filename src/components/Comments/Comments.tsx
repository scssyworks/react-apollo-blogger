import React, { Fragment } from 'react';
import classes from './Comments.module.scss';
import { TextField, Button } from '@material-ui/core';
import { Comment as UserComment } from '../Article/queries/extendedArticle';


const Comments = ({ data }: { data: UserComment[] }) => {
    return (
        <section className={classes.comments}>
            <TextField id="standard-basic" label="Write a comment" multiline />
            <Button className={classes['comment-btn']} variant="contained" disableElevation>Comment</Button>
            {
                data.length
                    ? data.map(
                        ({ user, title, description }: UserComment) => (
                            <Fragment>
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