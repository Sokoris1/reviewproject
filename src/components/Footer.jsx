import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
        <nav>
            <Link to="/extra">Дополнительно о нас</Link>
            <Link to="/contacts">Контакты</Link>
        </nav>
    </>
  )
}
