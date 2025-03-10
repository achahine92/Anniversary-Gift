import './App.sass'
import Home from './Components/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Gallery from './Components/Gallery'
import GamePlay from './Components/GamePlay'

const App = () => {

  return (
    <Router>
      <nav>
        <h1>A Celebration of Our Love</h1>
        <Link to="/home">
          <button className="home-button">Home</button>
        </Link>
      </nav>
      <div className="wrapper">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gameplay" element={<GamePlay />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App