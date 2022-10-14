import React from 'react'
import { Card } from '@mui/material'
const PostItems = (props) => {
  return (
    
            <Card variant="outlined">
              <div className="id">Id = {props.id}</div>
                <div className="title">Title = {props.title}</div>
                <div className="body">Body = {props.body}</div>
                <div className="userId">UserId = {props.userId}</div>
                <div className="tags">Tags = {props.tags}</div>
                <div className="reactions">Reactions = {props.reactions}</div>
                 </Card>
    
  )
}

export default PostItems

