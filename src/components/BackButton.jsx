import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton({destination}) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(destination)
    }
  return (
    <button className='defaultButton' onClick={handleClick}>
        Back
    </button>
  )
}

export default BackButton