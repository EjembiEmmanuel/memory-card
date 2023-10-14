import { useState, useEffect } from 'react'
import './App.css'
import StartScreen from './screens/StartScreen'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, []); 

  return (
    <div className="app">
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <StartScreen />
      )}
      <Footer />
    </div>
  )
}

export default App
