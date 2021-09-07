import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar'
import './assets/css/app.css'
import Chat from './components/Chat'
import { login, logout, selectUser } from './features/user/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import Login from './components/Login'
import { auth } from './firebase'
import $ from 'jquery'

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    $(function () {
      $('.loader').delay(2000).fadeOut('slow')
      $('#overlayer').delay(2000).fadeOut('slow')
      setLoading(false)
    })
  }, [])

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // IF USER HAS LOGGED IN
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        )
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <>
      <div id='overlayer'>
        <span className='loader'>
          <span className='loader-inner'></span>
        </span>
      </div>
      {!loading && (
        <div className='discord '>
          {user ? (
            <>
              <Sidebar />
              <Chat />
            </>
          ) : (
            <Login />
          )}
        </div>
      )}
    </>
  )
}

export default App
