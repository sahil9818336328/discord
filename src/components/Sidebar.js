import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { Avatar } from '@material-ui/core'
import SidebarChannel from './SidebarChannel'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/user/userSlice'
import db, { auth } from '../firebase'
import '../assets/css/sidebar.css'

const Sidebar = () => {
  const [channels, setChannels] = useState([])

  // FIRESTORE DATABASE
  useEffect(() => {
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          channel: doc.data(),
        }))
      )
    )
  }, [])

  const user = useSelector(selectUser)

  const addChannel = () => {
    const channelName = prompt('Enter a new channel name')

    if (channelName) {
      db.collection('channels').add({
        channelName,
      })
    }
  }
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <h4>React Bootcamp</h4>
        <ExpandMoreIcon />
      </div>

      <div className='sidebar__channels'>
        <div className='sidebar__channelsHeader'>
          <div className='sidebar__header'>
            <ExpandMoreIcon />
            <h5>
              <span>Text</span> Channels
            </h5>
          </div>

          <AddIcon
            className='sidebar__addChannel'
            onClick={() => addChannel()}
          />
        </div>

        <div className='sidebar__channelsList'>
          {channels.map(({ id, channel }) => (
            <SidebarChannel
              key={id}
              id={id}
              channelName={channel.channelName}
            />
          ))}
        </div>
      </div>

      <div className='sidebar__voice'>
        <SignalCellularAltIcon
          className='sidebar__voiceIcon'
          fontSize='large'
        />
        <div className='sidebar__voiceInfo'>
          <h4>Voice Connected</h4>
          <p>Stream</p>
        </div>
        <div className='sidebar__voiceIcons'>
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>

      <div className='sidebar__profile'>
        <Avatar
          src={user.photo}
          onClick={() => auth.signOut()}
          style={{ cursor: 'pointer' }}
        />
        <div className='sidebar__profileInfo'>
          <h4>{user.displayName}</h4>
          <p>
            <span>{user.displayName}</span> #{user.uid.substring(0, 5)}
          </p>
        </div>

        <div className='sidebar__profileIcons'>
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
