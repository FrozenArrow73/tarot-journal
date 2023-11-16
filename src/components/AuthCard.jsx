import React from 'react'

function AuthCard(props) {
  return (
    <form className='authCard' onSubmit={props.handleSubmit}>{props.children}</form>
  )
}

export default AuthCard