import React from 'react'

const Card = ({ children, reverse }) => {
  //   return <div className={`card ${reverse && 'reverse'}`}>{children}</div>

  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.5)' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  )
}

export default Card
