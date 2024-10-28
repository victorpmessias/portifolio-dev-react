import React from 'react'
import './InputErrorBox.css'

const InputErrorBox = ({ error }) => {
  return (
    <> {error && <div className='errorBox'>{error}</div>} </>
  )
}

export default InputErrorBox