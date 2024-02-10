import React from 'react'

type btn = {
  label: string,
  onClick?: any,
  style?: any
}

const MAButton = (props:btn) => {
  const {label , onClick , style} = props
  return (
    <div>
      <button className='button' style={style} onClick={onClick}>{label}</button>
    </div>
  )
}

export default MAButton