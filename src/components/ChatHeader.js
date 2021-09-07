import React from 'react'
import NotificationsIcon from '@material-ui/icons/Notifications'
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SendRoundedIcon from '@material-ui/icons/SendRounded'
import HelpRoundedIcon from '@material-ui/icons/HelpRounded'
import '../assets/css/chatHeader.css'

const ChatHeader = ({ channelName }) => {
  return (
    <div className='chatHeader'>
      <div className='chatHeader__left'>
        <h4>
          <span className='chatHeader__hash'>#</span>
          {channelName ? channelName : 'Choose channel'}
        </h4>
      </div>
      <div className='chatHeader__right'>
        <NotificationsIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />

        <div className='chatHeader__search'>
          <input placeholder='Search' />
          <SearchRoundedIcon />
        </div>

        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  )
}

export default ChatHeader
