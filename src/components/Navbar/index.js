import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value
          const logosrc = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
          const themeToggleIconSrc = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
          const navbarBg = isDarkTheme ? 'bgDark' : 'bgLight'
          const heading = isDarkTheme ? 'textLight' : 'textDark'

          return (
            <div className={`navbar ${navbarBg}`}>
              <img src={logosrc} alt="website logo" className="navbar-logo" />
              <ul className="navbar-links">
                <Link to="/">
                  <li className={heading}>Home</li>
                </Link>
                <Link to="/about">
                  <li className={heading}>About</li>
                </Link>
              </ul>
              <button
                data-testid="theme"
                onClick={toggleTheme}
                className="theme-button"
              >
                <img
                  src={themeToggleIconSrc}
                  alt="theme"
                  className="navbar-theme-icon"
                />
              </button>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
