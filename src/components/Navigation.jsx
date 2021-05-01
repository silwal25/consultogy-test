import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="container">
      <nav className="navigation">
        <ul className="navigation__nav">
          <li className="navigation__nav-item">
            <NavLink to="/consult" className="navigation__nav-link">
              Consult Now
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/business-trends" className="navigation__nav-link">
              Business Trends
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-ideas" className="navigation__nav-link">
              startup ideas
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/pitch-deck" className="navigation__nav-link">
              pitch deck
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/motivation" className="navigation__nav-link">
              motivation
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/founder-assistance" className="navigation__nav-link">
              founder assistance
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/funding" className="navigation__nav-link">
              funding
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-hiring" className="navigation__nav-link">
              startup hiring
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/startup-branding" className="navigation__nav-link">
              startup branding
            </NavLink>
          </li>
          <li className="navigation__nav-item">
            <NavLink to="/more" className="navigation__nav-link">
              more
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
