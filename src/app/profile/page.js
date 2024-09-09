'use client'

import React,{useEffect} from 'react'
import {LikedMovies,Profile,Navbar} from '../index' 
import { useRouter } from 'next/navigation.js'
import { useAuth } from '../contexts/AuthContext.js'
import styles from '../styles/profile.module.scss'

const ProfileScreen = () => {
  const router = useRouter()
  const {userLoggedIn,setUserLoggedInfalse,userData} = useAuth()

  useEffect(() => {
    if (!userLoggedIn || !userData) {
      setUserLoggedInfalse();
      router.push('/login')
    }
  }, [userLoggedIn])
  
   
  return (
    <div className={styles.profileScreen}>
        <Navbar />
        <Profile />
        <LikedMovies />
    </div>
  )
}

export default ProfileScreen