
export default function Comment({ user, comment, replies}) {
    const fiveMin = 300000;
    const timePassed = new Date() - new Date(comment.createdAt) > fiveMin;
    console.log(replies)
    const canReply = Boolean(user.id)
    const canEdit = user.id === comment.user && !timePassed;
    const canDelete = user.id === comment.user && !timePassed;

  return (
    <div className='comment'>
        replies
      <div className="commentImageWrapper">
          <img src={user?.image} alt='avatar' />
        </div> 
        <div className='commentRightPart'>
            <div className='commentContent'>
                <div className='commentAuthor'>
                    {comment?.username}
                </div>
                <span>{comment.createdAt}</span>
            </div>
            <div className='commentBody'>{comment.body}</div>
            <div className='commentActions'>
                {canReply && <div classname='commentAction'>
                    <span>reply</span>
                </div>}
                {canEdit && <div classname='commentAction'>
                    <span>edit</span>
                </div>}
                {canDelete && <div classname='commentAction'>
                    <span>delete</span>
                </div>}
            </div>
            {replies.length > 0 && (
                <div className='replies'>
                    {replies.map((reply) => (
                        <Comment key={reply.id} replies={[]} comment={reply} />
                        ))}
                </div>
            )}
        </div>
    </div>
  )
}
