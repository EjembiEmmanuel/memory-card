import PropTypes from 'prop-types'
import "../styles/GameScreen.css"
import { useState, useEffect } from 'react' ;
import Card from "../components/Card";
import GameOver from '../components/GameOver';
import FlipSound from "../assets/flip.mp3"

export default function GameScreen({
    props: {
        isSoundPlaying,
        characters,
        setCharacters,
        visibleCharacters,
        getCharacters,
        getVisibleCharacters,
        evaluateGameStatus,
        score,
        setScore,
        updateScore
    }
}) {
    const [isClicked, setIsClicked] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)
    const [gameStatus, setGameStatus] = useState("running")

    const playFlipSound = () => {
        if (isSoundPlaying) {
            const sound = new Audio(FlipSound)
            sound.volume = 0.9
            sound.play()
        }
    }

    const handleCardClick = (character) => {
        setIsClicked(true)

        if (isClicked) return

        let status = evaluateGameStatus(character);
        setGameStatus(status);
        character.clicked = true;

        if (status !== "running") {
            if (status === "win") updateScore();
            setIsClicked(false)
            return
        }

        updateScore()

        setIsFlipped(true)
        playFlipSound()

        setTimeout(() => {
            getVisibleCharacters(characters)
        }, 800);
        
        setTimeout(() => {
            setIsFlipped(false)
            playFlipSound()
        }, 1000);

        setTimeout(() => {
            setIsClicked(false)
            status = "running"
        }, 1500);
    }

    const restartGame = () => {
        setScore(0)
        setGameStatus("running")

        characters.forEach(character => {
            character.clicked = false;
        })

        getCharacters();
    };

    useEffect(() => {
        getCharacters();

        return () => {
            setCharacters([]);

            characters.forEach(character => {
                character.clicked = false;
            });
        }
    }, []);

    const gameOverProps = {
        gameStatus,
        restartGame
    }

    return (
        <div className="gameScreen">
            {gameStatus === "running" && (
                <>
                    <div className="cards">
                        {visibleCharacters.map((visibleCharacter) => (
                            <Card
                                key={visibleCharacter.id}
                                isFlipped = { isFlipped }
                                handleCardClick = { handleCardClick }
                                character = { visibleCharacter }
                            />
                        ))}
                    </div>
                    <div className="progressIndicator">{score} / {characters.length}</div>
                </>
            )}
            {gameStatus === "lose" && <GameOver props = { gameOverProps } />}
            {gameStatus === "win" && <GameOver props = { gameOverProps } />}
        </div>
    )
}

GameScreen.propTypes = {
    props: PropTypes.object.isRequired
}