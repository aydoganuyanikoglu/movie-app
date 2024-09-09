'use client'

import React,{useEffect} from 'react'
import { useAuth } from '../contexts/AuthContext.js'
import {Login,Navbar} from '../index.js'
import { useRouter } from 'next/navigation.js'

const LoginScreen = () => {
  const router = useRouter()
  const {userLoggedIn} = useAuth()

  useEffect(() => {
    if (userLoggedIn) {
      router.push("/profile")
    }
    else {
      router.push("/login")
    }
  }, [userLoggedIn])
  
  return (
    <div>
        <Navbar />
        <Login />
    </div>
  )
}

export default LoginScreen