import React from 'react'

function AuthCard(props) {
  return (
    <form className='authCard'>{props.children}</form>
  )
}

export default AuthCard