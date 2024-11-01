import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class About extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imgSrc = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

          const bg = isDarkTheme ? 'bgDark1' : 'bgLight1'
          const heading = isDarkTheme ? 'textLight' : 'textDark'

          return (
            <div className={bg}>
              <img src={imgSrc} alt="about" />
              <h1 className={heading}>About</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default About
