import React from 'react'
import './business.css';
export default function Child({name, userName, email, phone,company}) {
  return (
    <div className="business-card">
        <h1 className="name">{name}</h1>
        <p className="info">Username: {userName}</p>
        <p className="info">Email: {email}</p>
        <p className="info">PhoneNumber: {phone}</p>
        <p className="profession">Company: {company}</p>
       
    </div>

  )
}
