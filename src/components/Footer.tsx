import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bottom-menu">
        <a href="/" className="bottom-menu-item">previous</a>
        <a href="/" className="bottom-menu-item">next</a>
    </footer>
  )
}