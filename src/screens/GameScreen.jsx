import PropTypes from 'prop-types'
import "../styles/GameScreen.css"
import { useState } from 'react';
import Card from "../components/Card";
import FlipSound from "../assets/flip.mp3"

export default function GameScreen({
    props: {
        gameLevel,
        isSoundPlaying
    }
}) {
    const [isFlipped, setIsFlipped] = useState(false)

    const playFlipSound = () => {
        if (isSoundPlaying) {
            const sound = new Audio(FlipSound)
            sound.volume = 0.9
            sound.play()
        }
    }

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
        playFlipSound()
        
        setTimeout(() => {
            setIsFlipped(false)
            playFlipSound()
        }, 1000);
    }

    const cardProps = {
        isFlipped,
        handleFlip
    }

    let cards = []

    let numberOfCards

    if (gameLevel === "Easy") {
        numberOfCards = 3
    } else if (gameLevel === "Medium") {
        numberOfCards = 4
    } else if (gameLevel === "Hard") {
        numberOfCards = 5
    }

    for (let i = 0; i < numberOfCards; i++) {
        cards.push(<Card props={cardProps} />)
    }

    return (
        <div className="gameScreen">
            {cards.map((card) => (
                <>
                    {card}
                </>
            ))}
        </div>
    )
}

GameScreen.propTypes = {
    props: PropTypes.object.isRequired
}