'use client'

import React,{useEffect} from 'react'
import {Register,Navbar} from '../index.js'
import { useAuth } from '../contexts/AuthContext.js'
import { useRouter } from 'next/navigation.js'

const RegisterScreen = () => {
  const router = useRouter()
  const {userLoggedIn} = useAuth()

  useEffect(() => {
    if (userLoggedIn) {
      router.push("/profile")
    }
    else {
      router.push("/register")
    }
  }, [userLoggedIn])
  
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  )
}

export default RegisterScreen