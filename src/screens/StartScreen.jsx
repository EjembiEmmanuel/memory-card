import PropTypes from 'prop-types'
import "../styles/StartScreen.css"
import MortalKombatLogo from "../assets/mortal-kombat-logo.png"

export default function StartScreen({
    props: {
        gameStarted,
        setGameStarted,
        setGameLevel,
        playClickSound
    } }) {

    const startGame = () => {
        setGameStarted(!gameStarted)
    }

    const handleGameLevel = (level) => {
        setGameLevel(level)
    }

    return (
        <div className="startScreen">
            <div className="logoContainer">
                <img className="logo" src={MortalKombatLogo} alt="Mortal Kombat Logo" />
            </div>
            <div className="levelBtnsContainer">
                <button onClick={() => {startGame(); playClickSound(); handleGameLevel("Easy")}} className="levelBtn">Easy</button>
                <button onClick={() => {startGame(); playClickSound(); handleGameLevel("Medium")}} className="levelBtn">Medium</button>
                <button onClick={() => {startGame(); playClickSound(); handleGameLevel("Hard")}} className="levelBtn">Hard</button>
            </div>
        </div>
    )
}

StartScreen.propTypes = {
    props: PropTypes.object.isRequired
}