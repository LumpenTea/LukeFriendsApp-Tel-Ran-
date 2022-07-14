import React from 'react'
import style from './friends.module.css'

const SmallFriend = ({changeFriend, value}) => {
    return (
    <div onClick={() => changeFriend(value)} className={`${style.small} ${style[value]}`}></div>
  )
}

export default SmallFriend