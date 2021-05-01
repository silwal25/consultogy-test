export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span>©</span> Consultogy
      </div>
      <input type="checkbox" className="header__checkbox" id="navi-toggle" />
      <label for="navi-toggle" className="header__button">
        <span className="header__burger"></span>
      </label>
      <div className="content-background"></div>
      <div className="content-wrapper">
        <div className="header__search">
          <form action="#" className="form">
            <i className="fas fa-search"></i>
            <div className="form__input">
              <input type="text" placeholder="Search" />
            </div>
            <button className="btn btn-primary">All Categories</button>
          </form>
        </div>
        <div className="select-wrapper">
          <select name="language" id="language" className="header__language-chooser">
            <option value="english">en</option>
            <option value="espanol">es</option>
            <option value="hindi">हि</option>
          </select>
        </div>
        <ul className="header__navigation">
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              Support
            </a>
          </li>
          <span className="divider">&nbsp;</span>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              log in
            </a>
          </li>
          <li className="header__navigation-item">
            <a href="#" className="header__navigation-link">
              sign up
            </a>
          </li>
        </ul>
        <div className="header__notification">
          <i className="far fa-bell"></i>
          <span className="badge">0</span>
        </div>
      </div>
    </header>
  )
}
