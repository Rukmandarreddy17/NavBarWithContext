import {Component} from 'react'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

class Home extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const imageSrc = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

          const bg = isDarkTheme ? 'bgDark1' : 'bgLight1'
          const heading = isDarkTheme ? 'textLight' : 'textDark'

          return (
            <div className={bg}>
              <img src={imageSrc} alt="home" />
              <h1 className={heading}>Home</h1>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
