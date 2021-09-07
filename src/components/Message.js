import { Avatar } from '@material-ui/core'
import React from 'react'
import '../assets/css/message.css'

const Message = ({ timestamp, message, user }) => {
  return (
    <div className='message'>
      <Avatar src={user.photo} />
      <div className='message__info'>
        <h6>
          {user.displayName}
          <span className='message__timeStamp'>
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h6>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
