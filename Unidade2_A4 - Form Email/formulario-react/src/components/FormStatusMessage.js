import React from 'react'
import './FormStatusMessage.css'

const FormStatusMessage = ({ message }) => {
  return (
    <>
        {message && <div className='statusMessage'>{message}</div>}
    </>
  )
}

export default FormStatusMessage