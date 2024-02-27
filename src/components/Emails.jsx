import React from 'react'
import Email from './Email'

function Emails(props) {    
  return (
    <ul>
    {props.emails.map((email, index) => (
        <Email 
        key={index}
        email={email}
        toggleRead={props.toggleRead}
        toggleStar={props.toggleStar}
        ></Email>
    ))}
  </ul>
  )
}

export default Emails