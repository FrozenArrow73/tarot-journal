import React from 'react'
import Background from '../components/Background'
import AuthHeader from '../components/AuthHeader'
import AuthCard from '../components/AuthCard'

function Register() {
  return (
    <Background>
      <AuthHeader/>
      <body className='authBody'>
        <AuthCard>
          
        </AuthCard>
      </body>
    </Background>
  )
}

export default Register