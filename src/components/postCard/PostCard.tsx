import React from 'react'

const PostCard = (props:{title:string;body:string}) => {
  return (
    <div className='postCard'>
        <h1>{props.title}</h1>
        <p>{props.body}</p>
    </div>
  )
}

export default PostCard;