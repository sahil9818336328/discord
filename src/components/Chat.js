import React, { useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded'
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard'
import GifSharpIcon from '@material-ui/icons/GifSharp'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions'
import Message from './Message'
import { selectUser } from '../features/user/userSlice'
import { selectChannelId, selectChannelName } from '../features/app/appSlice'
import { useSelector } from 'react-redux'
import db from '../firebase'
import firebase from 'firebase'
import '../assets/css/chat.css'

const Chat = () => {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const user = useSelector(selectUser)
  const channelName = useSelector(selectChannelName)
  const channelId = useSelector(selectChannelName)

  useEffect(() => {
    if (channelId) {
      db.collection('channels')
        .doc(channelId)
        .collection('messages')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        )
    }
  }, [channelId])
  const handleSubmit = (e) => {
    e.preventDefault()
    db.collection('channels').doc(channelId).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user,
    })
    setInput('')
  }
  return (
    <div className='chat'>
      <ChatHeader channelName={channelName} />

      <div className='chat__messages'>
        {messages.map((message, index) => (
          <Message
            key={index}
            timestamp={message.timestamp}
            message={message.message}
            user={message.user}
          />
        ))}
      </div>

      <div className='chat__input'>
        <AddCircleRoundedIcon fontSize='large' />

        <form onSubmit={handleSubmit}>
          <input
            disabled={!channelId}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Message #${channelName ? channelName : ''}`}
          />
          <button type='submit' className='chat__inputButton'>
            Send Message
          </button>
        </form>

        <div className='chat__inputIcons'>
          <CardGiftcardIcon fontSize='large' />
          <GifSharpIcon fontSize='large' />
          <EmojiEmotionsIcon fontSize='large' />
        </div>
      </div>
    </div>
  )
}

export default Chat
