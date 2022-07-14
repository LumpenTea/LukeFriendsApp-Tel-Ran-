import React from 'react'
import style from './friends.module.css'

const BigFriend = ({changeFriend, value}) => {
  return (
    <div onClick={() => changeFriend(null)} className={`${style.big} ${style[value]}`}></div>
  )
}

export default BigFriend