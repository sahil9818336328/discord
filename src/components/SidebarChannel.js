import React from 'react'
import { useDispatch } from 'react-redux'
import { setChannelInfo } from '../features/app/appSlice'
import '../assets/css/sidebarChannel.css'

const SidebarChannel = ({ id, channelName }) => {
  const dispatch = useDispatch()
  return (
    <div
      className='sidebarChannel'
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName,
          })
        )
      }
    >
      <h5>
        <span className='sidebarChannel__hash'>#</span>
        {channelName}
      </h5>
    </div>
  )
}

export default SidebarChannel
