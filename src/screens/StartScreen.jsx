import PropTypes from 'prop-types'
import "../styles/StartScreen.css"
import MortalKombatLogo from "../assets/mortal-kombat-logo.png"

export default function StartScreen({
    props: {
        playClickSound
    } }) {

    return (
        <div className="startScreen">
            <div className="logoContainer">
                <img className="logo" src={MortalKombatLogo} alt="Mortal Kombat Logo" />
            </div>
            <div className="levelBtnsContainer">
                <button onClick={playClickSound} className="levelBtn">Easy</button>
                <button onClick={playClickSound} className="levelBtn">Medium</button>
                <button onClick={playClickSound} className="levelBtn">Hard</button>
            </div>
        </div>
    )
}

StartScreen.propTypes = {
    props: PropTypes.object.isRequired
}