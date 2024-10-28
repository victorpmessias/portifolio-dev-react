import React from 'react'
import './FormButton.css'
import LoadingCircle from './LoadingCircle'

const Button = ({ loading }) => {
  return (
    <button className='formBtn' type="submit" disabled={loading}>
        {loading ? <LoadingCircle /> : 'Enviar' }
    </button>
  )
}

export default Button