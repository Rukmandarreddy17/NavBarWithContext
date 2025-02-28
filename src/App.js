import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="*" component={NotFound} />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
