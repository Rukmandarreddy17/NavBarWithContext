import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class NotFound extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bg = isDarkTheme ? 'bgDark1' : 'bgLight1'
          const heading = isDarkTheme ? 'textLight' : 'textDark'

          return (
            <div className={bg}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
              />
              <h1 className={heading}>Lost Your Way?</h1>
              <p className={heading}>We cannot seem to find the page</p>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default NotFound
