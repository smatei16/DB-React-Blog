import React from 'react'

type Props = {}

export default function Details({}: Props) {
  return (
    <nav className="menu">
        <ul className="menu-list">
            <li className="menu-item"><a className="menu-item-link" href="/">Travel Updates</a></li>
            <li className="menu-item"><a className="menu-item-link" href="/">Reviews</a></li>
            <li className="menu-item"><a className="menu-item-link" href="/">About</a></li>
            <li className="menu-item"><a className="menu-item-link" href="/">Contact</a></li>
        </ul>
    </nav>
  )
}