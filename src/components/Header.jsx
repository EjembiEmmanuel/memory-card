import PropTypes from 'prop-types'
import "../styles/Header.css"
import MortalKombatLogo from "../assets/mortal-kombat-logo.png"

export default function Header({
    props : {
        score,
        bestScore,
        restartGame,
        playClickSound
    }   }) {

    return (
        <div className="header">
            <div className="headerLogoContainer">
                <img onClick={() => {restartGame(); playClickSound()}} className="logo" src={MortalKombatLogo} alt="Mortal Kombat Logo" />
            </div>
            <div className="scoreContainer">
                <p className="score">Score: {score}</p>
                <p className="bestScore">Best score: {bestScore}</p>
            </div>
        </div>
    )
}

Header.propTypes = {
    props: PropTypes.object.isRequired
}