import { useState, useEffect } from 'react'
import Sound  from 'react-sound'
import './App.css'
import StartScreen from './screens/StartScreen'
import Footer from './components/Footer'
import Help from './components/Help'
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import MortalKombatThemeSong from "./assets/Mortal_Kombat.mp3"
import ClickSound from "./assets/button.mp3"


function App() {
  const [loading, setLoading] = useState(true)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [isSoundPlaying, setIsSoundPlaying] = useState(true)
  const [isHelpVisible, setIsHelpVisible] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameLevel, setGameLevel] = useState("")

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const restartGame = () => {
    setGameStarted(false)
  }

  const playClickSound = () => {
    if (isSoundPlaying) {
      const sound = new Audio(ClickSound)
      sound.volume = 0.2
      sound.play()
    }
  }

  const startScreenProps = {
    gameStarted,
    setGameStarted,
    setGameLevel,
    playClickSound
  }

  const headerProps = {
    score,
    bestScore,
    restartGame,
    playClickSound
  }

  const gameScreenProps = {
    gameLevel,
    isSoundPlaying
  }

  const footerProps = {
    isMusicPlaying,
    setIsMusicPlaying,
    isSoundPlaying,
    setIsSoundPlaying,
    isHelpVisible,
    setIsHelpVisible,
    playClickSound
  }

  const helpProps = {
    isHelpVisible
  }

  return (
    <div className="app">
      <Sound 
        url={MortalKombatThemeSong}
        playStatus={isMusicPlaying ? 'PLAYING' : 'PAUSED'}
        volume={30}
        loop={true} />

      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <>
          {!gameStarted ? (
            <StartScreen props = { startScreenProps } />
          ) : (
            <>
              <Header props = { headerProps } />
              <GameScreen props = { gameScreenProps } />
            </>
          )}
          <Footer props = { footerProps } />
        </>
      )}


      {isHelpVisible && <Help props = { helpProps } />}
    </div>
  )
}

export default App
