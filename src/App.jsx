import { useState, useEffect } from 'react'
import ReactHowler from 'react-howler'
import './App.css'
import StartScreen from './screens/StartScreen'
import Footer from './components/Footer'
import Help from './components/Help'
import Header from './components/Header'
import GameScreen from './screens/GameScreen'
import MortalKombatThemeSong from "./assets/Mortal_Kombat.mp3"
import ClickSound from "./assets/button.mp3"
import { mortalKombatCharacters } from './characters';


function App() {
  const [loading, setLoading] = useState(true)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [isSoundPlaying, setIsSoundPlaying] = useState(true)
  const [isHelpVisible, setIsHelpVisible] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [gameLevel, setGameLevel] = useState([])
  const [characters, setCharacters] = useState([])
  const [visibleCharacters, setVisibleCharacters] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const reset = () => {
    setGameLevel([]);
    setScore(0)
    setBestScore(0)
    setGameStarted(false)
    characters.forEach(character => {
      character.clicked = false;
  });
  };

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

  const getCharacters = () => {
    const randomCharacters = new Set();
  
    while (randomCharacters.size < gameLevel[0]) {
      const randNum = Math.floor(Math.random() * 20);
      randomCharacters.add(mortalKombatCharacters[randNum]);
    }
  
    const charactersArray = Array.from(randomCharacters);
    setCharacters(charactersArray);
    getVisibleCharacters(charactersArray);
  };

  const getVisibleCharacters = (arr) => {
    const shuffledCharacters = new Set();
    let clicked = 0;
  
    while (shuffledCharacters.size < gameLevel[1]) {
      const randNum = Math.floor(Math.random() * arr.length);
      const character = arr[randNum];
  
      if (!shuffledCharacters.has(character)
        && (clicked < gameLevel[1] - 1 || !character.clicked)) {
        shuffledCharacters.add(character);
        clicked += +character.clicked;
      }
    }
  
    const charactersArray = Array.from(shuffledCharacters);
    setVisibleCharacters(charactersArray);
  };

  const evaluateGameStatus = (character) => {
    if (character.clicked) {
      return 'lose';
    }

    return score === gameLevel[0] - 1 ? 'win' : 'running';
  };
  

  const updateScore = () => {
    setScore(score + 1)

    if(score >= bestScore) setBestScore(bestScore + 1)
  };


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
    playClickSound,
    reset
  }

  const gameScreenProps = {
    isSoundPlaying,
    characters,
    setCharacters,
    visibleCharacters,
    setVisibleCharacters,
    getCharacters,
    getVisibleCharacters,
    evaluateGameStatus,
    score,
    setScore,
    updateScore,
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
      <ReactHowler 
        src={MortalKombatThemeSong}
        playing={isMusicPlaying}
        volume={0.3}
        loop={true}
      />

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
