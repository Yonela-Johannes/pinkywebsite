import React, {useState, useEffect} from 'react'
import {getComments as getCommentsApi, createComment as createCommentApi} from '../../../../data/api'
import Comment from './Comment';
import Commentform from './CommentForm';

export default function Comments(user) {
    const [usersComments, setUsersComments] = useState([]);

    const rootComments = usersComments.filter((userComment) => userComment.parentId === null)

    const getReplies = commentId => {
        return usersComments.filter(userComment => userComment.parentId === commentId).sort((a, b) => 
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
    };

    // Add and edit comment 

    const addComment = (text, parentId) => {
        console.log('addComment', text, parentId)
        createCommentApi(text.parentId).then(comment => {
            setUsersComments([comment, ...usersComments])
        })
    }
    useEffect(() => {
        getCommentsApi().then((data) =>{
            setUsersComments(data)
        })
    }, [])

  return (
    <div className='comments'>
        <span className='commentsTitle'>Comments</span>
        <div className='commentFormTitle'>
            <Commentform submitLabel='Write' handleSubmit={addComment} />
        </div>
            <div className='commentsContainer'>{rootComments.map((rootComment) => (
                <div key={rootComment.id}>
                    <Comment 
                        user={user} 
                        key={rootComment.id} 
                        comment={rootComment} 
                        replies={getReplies(rootComments.id)}
                    />
                </div>
            ))}
        </div>
    </div>
  )
}
