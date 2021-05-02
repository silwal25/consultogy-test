import { NavLink } from 'react-router-dom'
import { useState } from 'react'
export default function Navigation() {
  const [text, setText] = useState('Navigation')
  return (
    <div className="container">
      <nav className="navigation">
        <button className="btn btn-primary">{text}</button>
        <ul className="navigation__nav">
          <li className="navigation__nav-item">
            <NavLink to="/consult" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              Consult Now
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/business-trends" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              Business Trends
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-ideas" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              startup ideas
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/pitch-deck" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              pitch deck
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/motivation" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              motivation
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/founder-assistance" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              founder assistance
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/funding" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              funding
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-hiring" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              startup hiring
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-branding" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              startup branding
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/more" className="navigation__nav-link" onClick={(e) => setText(e.target.innerHTML)}>
              more
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
